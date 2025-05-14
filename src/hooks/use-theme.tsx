
import { createContext, useContext, useState, useEffect } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
}

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  // We'll use state to manage the theme but always default to dark
  const [theme, setTheme] = useState<Theme>("dark")

  // Use useEffect to apply the dark theme after component mounts
  // This ensures we're not manipulating the DOM during render
  useEffect(() => {
    // Always set dark theme regardless of state
    // This ensures the site is always in dark mode
    const root = window.document.documentElement
    root.classList.remove("light")
    root.classList.add("dark")
  }, []) // Empty dependency array ensures this only runs once on mount

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={{
        theme,
        // This function is included but won't actually change the appearance
        // since we're forcing dark mode in the useEffect above
        setTheme: (newTheme) => {
          setTheme(newTheme)
        }
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
