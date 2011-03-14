namespace DNDI
{
    using System;
    using System.IO;
    using ApplicationUpdate.Client;
    using System.IO.Compression;
    using System.Security.Cryptography;
    using System.Xml;

    class Program
    {
        static string filePattern = null;
        static bool forceDecrypt = false;
        static bool decryptXml = false;
        static bool stdio = false;
        static bool quiet = false;
        static bool recurse = false;
        static bool wtf = false;

        // Below is CB; AT is 3b74d6e8-af6c-45cf-b82c-d88fa96891a3
        static Guid applicationId = new Guid("2a1ddbc4-4503-4392-9548-d0010d1ba9b1");

        
        static void Usage()
        {
            Console.WriteLine(@"
Usage: 
    dndi [-d -x -o -at -r -q] filename

Flags:

    -d    Force decryption. If not specified, dndi decrypts files with the
          extension .encrypted, otherwise it encrypts them.

    -x    Turn on XML decryption. If XML decryption is on, the stream is 
          assumed to contain binary XML, and the tool will write out text 
          XML. If off, the file is simply decrypted.

    -o    Write output to stdout. (Implies -q.)

    -at   Use the Adventure Tools encryption key instead of the Character 
          Builder key.

    -q    Suppress diagnostic output.

    -r    Treat the filename as a pattern and recurse directories.

    -wtf  Experimental
");
        }

        static void Main(string[] args)
        {
            for (int i = 0; i < args.Length; i++)
            {
                string arg = args[i].ToLowerInvariant();
                if (args[i][0] == '-')
                {
                    switch (arg)
                    {
                        case "-q":
                            quiet = true;
                            break;

                        case "-at":
                            applicationId = new Guid("3b74d6e8-af6c-45cf-b82c-d88fa96891a3");
                            break;

                        case "-d":
                            forceDecrypt = true;
                            break;

                        case "-x":
                            decryptXml = true;
                            break;

                        case "-o":
                            stdio = true;
                            quiet = true;
                            break;

                        case "-r":
                            recurse = true;
                            break;

                        case "-wtf":
                            wtf = true;
                            break;

                        default:
                            Console.WriteLine("Unknown flag: {0}", arg);
                            Usage();
                            return;
                    }
                }
                else
                {
                    filePattern = arg;
                }
            }

            if (filePattern == null)
            {
                Usage();
                return;
            }

            try
            {
                if (recurse)
                {
                    foreach (string fileName in Directory.GetFiles(".", filePattern, SearchOption.AllDirectories))
                    {
                        ProcessFile(fileName);
                    }
                }
                else
                {
                    ProcessFile(filePattern);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("SAD: {0}", e);
            }
        }

        static void ProcessFile(string fileName)
        {
            if (forceDecrypt || Path.GetExtension(fileName) == ".encrypted")
            {
                DecryptFile(fileName);
            }
            else
            {
                EncryptFile(fileName);
            }
        }

        static void EncryptFile(string fileName)
        {
            if (!quiet) { Console.WriteLine("Encrypting {0}...", fileName); }
            Guid updateId = CommonMethods.KeyStore.GetInstalledUpdate(applicationId);
            var algorithm = CommonMethods.GetAlgorithmWithKey(applicationId, updateId);

            string outFile = Path.GetFileNameWithoutExtension(fileName) + ".encrypted";
            if (!quiet) { Console.WriteLine("...to {0}", outFile); }
            using (var fileStream = new FileStream(outFile, FileMode.Create, FileAccess.Write))
            {
                fileStream.Write(updateId.ToByteArray(), 0, 16);
                using (var cryptoStream = new CryptoStream(fileStream, algorithm.CreateEncryptor(), CryptoStreamMode.Write))
                {
                    using (var gzipStream = new GZipStream(cryptoStream, CompressionMode.Compress))
                    {
                        string text = File.ReadAllText(fileName);
                        using (var writer = new StreamWriter(gzipStream))
                        {
                            writer.Write(text);
                            writer.Flush();
                        }
                    }
                }
            }
        }

        static void DecryptFile(string fileName)
        {
            if (wtf) { DecryptFileWTF(fileName); return; }

            if (!quiet) { Console.WriteLine("Decrypting {0}...", fileName); }
            using (var fileStream = CommonMethods.GetDecryptedStream(applicationId, fileName))
            {
                Stream inStream = fileStream;
                if (decryptXml)
                {
                    var reader = XmlDictionaryReader.CreateBinaryReader(fileStream, XmlDictionaryReaderQuotas.Max);

                    inStream = new MemoryStream();

                    var writer = XmlTextWriter.Create(inStream, new XmlWriterSettings { Indent = true });
                    writer.WriteNode(reader, false);
                    writer.Flush();

                    inStream.Position = 0;
                }

                if (stdio)
                {
                    Console.WriteLine(new StreamReader(inStream).ReadToEnd());
                }
                else
                {
                    string outFile = Path.GetFileNameWithoutExtension(fileName) + ".xml";
                    if (!quiet) { Console.WriteLine("...to {0}", outFile); }

                    using (var outStream = File.Create(outFile))
                    {
                        const int bufferSize = 128 * 1024;

                        int read;
                        byte[] bytes = new byte[bufferSize];
                        do
                        {
                            read = inStream.Read(bytes, 0, bufferSize);
                            outStream.Write(bytes, 0, read);
                        } while (read == bufferSize);
                    }
                }
            }
        }

        static void DecryptFileWTF(string fileName)
        {             
            using (var fileStream = CommonMethods.GetDecryptedStream(applicationId, fileName))
            {
                Stream inStream = fileStream;
                if (decryptXml)
                {
                    var reader = XmlDictionaryReader.CreateBinaryReader(fileStream, XmlDictionaryReaderQuotas.Max);

                    inStream = new MemoryStream();

                    var writer = XmlTextWriter.Create(inStream, new XmlWriterSettings { Indent = true });
                    writer.WriteNode(reader, false);
                    writer.Flush();

                    inStream.Position = 0;
                }

                if (stdio)
                {
                    Console.WriteLine(new StreamReader(inStream).ReadToEnd());
                }
                else
                {
                    string outFile = Path.GetFileNameWithoutExtension(fileName) + ".xml";
                    if (!quiet) { Console.WriteLine("...to {0}", outFile); }

                    using (var outStream = File.Create(outFile))
                    {
                        const int bufferSize = 128 * 1024;

                        int read;
                        byte[] bytes = new byte[bufferSize];
                        do
                        {
                            read = inStream.Read(bytes, 0, bufferSize);
                            outStream.Write(bytes, 0, read);
                        } while (read == bufferSize);
                    }
                }
            }
        }
    }
}