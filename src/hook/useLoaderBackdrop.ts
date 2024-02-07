import { useState } from 'react';

function useLoaderBackdrop() {
    const [isLoading, setIsLoading] = useState(false);

    return { isLoading, setIsLoading };
}

export default useLoaderBackdrop;