/* UseCallback */

import { useCallback } from 'react';

function Component() {

  const click = useCallback(() => {
    console.log('Clicked!');
  }, []);


}
