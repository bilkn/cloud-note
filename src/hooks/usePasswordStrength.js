import { useEffect, useState } from 'react';

export default function usePasswordStrength(password) {
  const [strength, setStrength] = useState('weak');

  useEffect(() => {
    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    );
    const mediumRegex = new RegExp(
      '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
    );
    if (strongRegex.test(password)) setStrength('strong');
    else if (mediumRegex.test(password)) setStrength('medium');
    return setStrength('weak');
  }, [password]);
  
  return { strength };
}
