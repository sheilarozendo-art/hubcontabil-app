"use client"

import { useState, type ReactNode } from "react"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import Footer from "./Footer"

export default function AppShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#F5F7FB" }}>
      <Sidebar mobileOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <Topbar onOpenMenu={() => setMenuOpen(true)} />
        <main style={{ flex: 1, padding: "24px 20px" }}>
          <div style={{ maxWidth: 1360, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
