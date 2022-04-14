const useOnUnmount = onUnmount =>
  useEffect(() => {
    return () => onUnmount && onUnmount();
  }, []);
