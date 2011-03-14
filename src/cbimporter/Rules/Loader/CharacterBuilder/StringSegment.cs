namespace cbimporter.Rules.Loader.CharacterBuilder
{
    using System;

    public struct StringSegment : IEquatable<StringSegment>
    {
        int hash;
        int length;
        int offset;
        string text;

        public StringSegment(string text)
            : this(text, 0, text.Length)
        {
        }

        public StringSegment(string text, int offset, int length)
        {
            this.text = text;
            this.offset = offset;
            this.length = length;
            this.hash = 0;
        }

        public string String { get { return this.text; } }
        public int Offset { get { return this.offset; } }
        public int Length { get { return this.length; } }

        public char this[int index]
        {
            get
            {
                if (index < 0 || index >= length)
                {
                    throw new ArgumentOutOfRangeException("index");
                }
                return this.text[this.offset + index];
            }
        }

        public int IndexOf(char c)
        {
            for (int i = this.offset; i < this.length; i++)
            {
                if (this.text[i] == c) { return i - this.offset; }
            }
            return -1;
        }

        public int IndexOf(string str, StringComparison comparisonType)
        {
            return this.text.IndexOf(str, this.offset, this.length, comparisonType) - this.offset;
        }

        public bool StartsWith(string text)
        {
            if (text.Length > this.length)
            {
                return false;
            }
            return (string.CompareOrdinal(text, 0, this.text, this.offset, text.Length) == 0);
        }

        public bool StartsWith(string text, StringComparison comparisonType)
        {
            if (text.Length > this.length)
            {
                return false;
            }
            return (string.Compare(text, 0, this.text, this.offset, text.Length, comparisonType) == 0);
        }

        public StringSegment Substring(int start)
        {
            if (start < 0 ||start >= this.length) { throw new ArgumentOutOfRangeException("start"); }
            return new StringSegment(this.text, this.offset + start, this.length - start);
        }

        public StringSegment Substring(int start, int length)
        {
            if (start < 0 || start >= this.length) { throw new ArgumentOutOfRangeException("start"); }
            if (length < 0 || length > this.length - start) { throw new ArgumentOutOfRangeException("length"); }
            return new StringSegment(this.text, this.offset + start, length);
        }

        public bool EndsWith(string text)
        {
            if (text.Length > this.length)
            {
                return false;
            }
            return (string.CompareOrdinal(text, 0, this.text, this.offset + this.length - text.Length, text.Length) == 0);
        }

        public bool EndsWith(string text, StringComparison comparisonType)
        {
            if (text.Length > this.length)
            {
                return false;
            }
            return (string.Compare(text, 0, this.text, this.offset + this.length - text.Length, text.Length, comparisonType) == 0);
        }

        public bool Equals(string other)
        {
            if (this.length != other.Length)
            {
                return false;
            }
            return string.CompareOrdinal(this.text, this.offset, other, 0, this.length) == 0;
        }

        public bool Equals(string other, StringComparison comparisonType)
        {
            if (this.length != other.Length)
            {
                return false;
            }
            return string.Compare(this.text, this.offset, other, 0, this.length, comparisonType) == 0;
        }

        public bool Equals(StringSegment other)
        {
            if (this.length != other.length)
            {
                return false;
            }
            return string.CompareOrdinal(this.text, this.offset, other.text, other.offset, this.length) == 0;
        }

        public override bool Equals(object obj)
        {
            if (obj is StringSegment)
            {
                return Equals((StringSegment)obj);
            }
            string s = obj as string;
            if (s != null)
            {
                return Equals(s);
            }
            return false;
        }

        public override int GetHashCode()
        {
            if (this.hash == 0)
            {
                int hash = 5381 ^ this.length;
                for (int i = 0; i < this.length; i++)
                {
                    hash = ((hash << 5) + hash) ^ this.text[offset + i];
                }
                if (hash == 0)
                {
                    hash = 1;
                }
                this.hash = hash;
            }
            return this.hash;
        }

        public override string ToString()
        {
            return this.text.Substring(this.offset, this.length);
        }

        public static bool operator ==(StringSegment left, string right)
        {
            return left.Equals(right);
        }

        public static bool operator !=(StringSegment left, string right)
        {
            return !left.Equals(right);
        }

        public static bool operator ==(string left, StringSegment right)
        {
            return right.Equals(left);
        }

        public static bool operator !=(string left, StringSegment right)
        {
            return !right.Equals(left);
        }
    }
}
