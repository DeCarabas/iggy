namespace cbimporter.Internal
{
    public static class EmptyArray
    {
        public static TElement[] Instance<TElement>()
        {
            return EmptyArray<TElement>.Instance;
        }
    }

    public static class EmptyArray<TElement>
    {
        public static readonly TElement[] Instance = new TElement[0];
    }
}
