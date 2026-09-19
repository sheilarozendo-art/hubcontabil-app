"use client"

import { useState, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import Footer from "./Footer"

export default function AppShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Login não utiliza o layout global
  if (pathname === "/login") {
    return <>{children}</>
  }

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#F5F7FB",
      }}
    >
      <Sidebar
        mobileOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Topbar onOpenMenu={() => setMenuOpen(true)} />

        <main
          style={{
            flex: 1,
            width: "100%",
            boxSizing: "border-box",
            padding: "24px 28px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 1360,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {children}
          </div>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          main {
            padding: 20px;
          }
        }

        @media (max-width: 639px) {
          main {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  )
}