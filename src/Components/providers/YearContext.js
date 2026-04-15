import { createContext, useContext, useMemo, useState } from 'react';

const YearContext = createContext(undefined);

export function YearProvider({ children }) {
  const [selectedYear, setSelectedYear] = useState(2026); // default year – change if needed

  const ctx = useMemo(() => ({ selectedYear, setSelectedYear }), [selectedYear]);

  return (
    <YearContext.Provider value={ctx}>
      {children}
    </YearContext.Provider>
  );
}

export function useYear() {
  const context = useContext(YearContext);
  if (context === undefined) {
    throw new Error('useYear must be used inside a YearProvider');
  }
  return context;
}
