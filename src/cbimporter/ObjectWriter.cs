namespace cbimporter
{
    using System;
    using System.CodeDom.Compiler;

    class ObjectWriter : IDisposable
    {
        readonly IndentedTextWriter writer;
        bool writtenAny = false;

        public ObjectWriter(IndentedTextWriter writer)
        {
            this.writer = writer;
        }

        public void Dispose()
        {
            Done();
        }

        public void Done()
        {
            if (writtenAny)
            {
                writer.WriteLine();
                writer.Indent--;
                writer.Write("}");
            }
            else
            {
                writer.Write("{}");
            }
        }

        public void Write(string key, string value)
        {
            WriteCore(key, "\"" + Converter.QuoteString(value) + "\"");
        }

        public void Write(string key, Identifier value)
        {
            WriteCore(key, "\"" + Converter.QuoteString(value) + "\"");
        }

        public void Write(string key, bool value)
        {
            WriteCore(key, value ? "true" : "false");
        }

        public void Write(string key, int value)
        {
            WriteCore(key, value.ToString());
        }

        public void Write(string key, string valueFormat, params object[] args)
        {
            string value = (args.Length > 0) ? string.Format(valueFormat, args) : valueFormat;
            WriteCore(key, value);
        }

        public void WritePrefix(string key, string prefix)
        {
            WriteCore(key, prefix);
        }

        void WriteCore(string key, string value)
        {
            if (!writtenAny)
            {
                writer.WriteLine("{");
                writer.Indent++;
                this.writtenAny = true;
            }
            else
            {
                writer.WriteLine(",");
            }

            if (key.Contains(" ")) { key = "'" + key + "'"; }
            writer.Write("{0}: {1}", key, value);
        }
    }
}
