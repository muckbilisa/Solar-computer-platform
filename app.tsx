import { useState, useEffect } from "react";

export default function App() {
  const MOMO = "680100992";
  const [cart, setCart] = useState(0);
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 60000); return () => clearInterval(t); }, []);

  const products = [
    { n: "Solar LED Bulb", p: "3000F", icon: "💡" },
    { n: "Solar Lantern", p: "5000F", icon: "🏮" },
    { n: "Solar Power Bank", p: "10000F / 12800F", icon: "🔋" },
    { n: "Solar Charger", p: "15000F", icon: "⚡" },
    { n: "Solar Home Kit", p: "20000F", icon: "🏠" },
    { n: "Solar Family Kit", p: "30000F", icon: "👨‍👩‍👧" },
    { n: "Solar Panel 50W / 100W", p: "50000F / 80000F", icon: "☀️" },
    { n: "Solar Full System", p: "100000F", icon: "🔆" },
  ];

  const referrals = [
    { name: "Franck J.", buy: "5000F", bonus: "2000F", at: Date.now() - 10 * 3600 * 1000 },
    { name: "Awa K.", buy: "30000F", bonus: "12000F", at: Date.now() - 26 * 3600 * 1000 },
  ];
  const isUnlocked = (at: number) => (now - at) >= 24 * 3600 * 1000;
  const hrsLeft = (at: number) => Math.max(0, Math.ceil((24 * 3600 * 1000 - (now - at)) / 3600000));

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 430, margin: "0 auto", background: "#0a0a0a", paddingBottom: 90, minHeight: "100vh" }}>
        
        {/* HEADER - NO LOCATION */}
        <div style={{ padding: 20, display: "flex", justifyContent: "space-between", borderBottom: "1px solid #222" }}>
          <h1 style={{ color: "#facc15", fontWeight: 900, margin: 0 }}>☀️ Solar Computer ✓</h1>
          <span style={{ fontSize: 9, background: "#1a1a1a", border: "1px solid #facc1533", padding: "4px 8px", borderRadius: 20 }}>Secure • Verified</span>
        </div>
        <div style={{ textAlign: "center", padding: 8, borderBottom: "1px solid #facc1511", color: "#facc15", fontSize: 10 }}>
          Verified Merchant ID: {MOMO} • 100% Secure • Safe Transactions
        </div>

        {/* PRODUCTS - YOUR EXACT PRICES */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: 16 }}>
          {products.map((pr, i) => (
            <div key={i} style={{ background: "#171717", borderRadius: 16, padding: 12, border: "1px solid #facc1515", textAlign: "center" }}>
              <div style={{ fontSize: 28 }}>{pr.icon}</div>
              <p style={{ fontSize: 11, fontWeight: 700, margin: "6px 0 2px" }}>{pr.n}</p>
              <p style={{ color: "#facc15", fontWeight: 900, fontSize: 13, margin: 0 }}>{pr.p}</p>
              <button onClick={() => setCart(c => c + 1)} style={{ width: "100%", marginTop: 8, background: "#facc15", color: "black", fontWeight: 900, fontSize: 10, padding: "8px 0", borderRadius: 10, border: "none" }}>Buy</button>
            </div>
          ))}
        </div>

        {/* FUN AREA */}
        <div style={{ margin: 16, background: "linear-gradient(90deg,#facc15,#f59e0b)", color: "black", borderRadius: 16, padding: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div><p style={{ fontWeight: 900, margin: 0 }}>Fun Area • Lucky Wheel</p><p style={{ fontSize: 10, margin: 0 }}>Try luck & win up to 5000F</p></div>
          <button style={{ background: "black", color: "#facc15", fontWeight: 900, padding: "8px 16px", borderRadius: 10, fontSize: 12, border: "none" }}>Spin Now</button>
        </div>

        {/* TEAM REFERRAL - NO LOCATION, 24HR LOCK */}
        <div style={{ margin: 16, background: "#171717", border: "1px solid #facc1530", borderRadius: 16, padding: 16 }}>
          <p style={{ fontWeight: 900, textAlign: "center", color: "#facc15", margin: "0 0 8px" }}>Team Referral • Invite & Earn</p>
          <p style={{ fontSize: 12, fontWeight: 700, textAlign: "center", border: "1px solid #facc1540", borderRadius: 8, padding: 8 }}>Friend buys 5000F lamp = 2000F bonus</p>
          <p style={{ fontSize: 10, color: "#999", textAlign: "center", marginTop: 8 }}>Withdrawal available after 24hrs • Instant credit • No limit</p>
          {referrals.map((r, i) => (
            <div key={i} style={{ background: "#0a0a0a", marginTop: 10, padding: 10, borderRadius: 10, display: "flex", justifyContent: "space-between" }}>
              <div><p style={{ fontSize: 11, fontWeight: 700, margin: 0 }}>{r.name} • {r.buy} → {r.bonus}</p><p style={{ fontSize: 10, color: "#888", margin: 0 }}>{isUnlocked(r.at) ? "✅ Available for withdrawal" : `🔒 Locked - ${hrsLeft(r.at)}hrs left`}</p></div>
              <span style={{ fontSize: 9, fontWeight: 900, padding: "4px 10px", borderRadius: 20, height: "fit-content", background: isUnlocked(r.at) ? "#facc15" : "#333", color: isUnlocked(r.at) ? "black" : "#888" }}>{isUnlocked(r.at) ? "Withdraw" : "Locked"}</span>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: 9, color: "#444", padding: "20px 10px" }}>Cart: {cart} • ID: {MOMO} ✓ Verified • 100% Secure • No location data</p>
      </div>
    </div>
  );
}
