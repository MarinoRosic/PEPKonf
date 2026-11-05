import { createContext, useContext, useMemo, useState } from 'react';
import { slike } from '../../data/slike';
import { SHOW_LECTURERS } from '../../data/lecturersData';

const YearContext = createContext(undefined);

export const YEARS = [2026, 2025, 2024, 2023];
export const CURRENT_YEAR = new Date().getFullYear();

// Open on the current year. If it has nothing to show yet (no photos and lecturers hidden),
// open on the newest year that does, so nobody lands on an empty gallery.
const hasContent = (year) => SHOW_LECTURERS || slike[year]?.length > 0;
const DEFAULT_YEAR =
  [CURRENT_YEAR, ...YEARS].find((year) => YEARS.includes(year) && hasContent(year)) ?? YEARS[0];

export function YearProvider({ children }) {
  const [selectedYear, setSelectedYear] = useState(DEFAULT_YEAR);

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
