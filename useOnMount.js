const useOnMount = onMount =>
  useEffect(() => {
    onMount && onMount();
  }, []);
