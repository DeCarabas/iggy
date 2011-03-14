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

        public void Write(string key, string valueFormat, params object[] args)
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

            string value = (args.Length > 0) ? string.Format(valueFormat, args) : valueFormat;
            writer.Write("{0}: {1}", key, value);
        }
    }
}
