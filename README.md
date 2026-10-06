@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #0b1020;
  --panel: #121a2d;
  --panel-strong: #1a2540;
  --muted: #8ea0c4;
  --text: #ebf2ff;
  --primary: #7c5cff;
  --primary-2: #31d0aa;
  --accent: #ffb703;
  --danger: #ff6b6b;
  --card-border: rgba(255, 255, 255, 0.08);
  --shadow: 0 18px 30px rgba(0, 0, 0, 0.28);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top, rgba(124, 92, 255, 0.22), transparent 18%),
    linear-gradient(180deg, #09111c 0%, #0d1322 100%);
  color: var(--text);
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
}

.app-shell {
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 20px 60px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 18px;
  border: 1px solid var(--card-border);
  border-radius: 22px;
  background: rgba(15, 21, 36, 0.8);
  backdrop-filter: blur(16px);
  box-shadow: var(--shadow);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.centered-brand {
  justify-content: center;
  margin-bottom: 10px;
}

.brand-logo {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), #4d7fff);
  font-weight: 800;
  font-size: 1.3rem;
}

.eyebrow {
  margin: 0;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.68rem;
}

.brand-wrap h1 {
  margin: 4px 0 0;
  font-size: 1.6rem;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pill-button,
.primary-button,
.secondary-button,
.ghost-button,
.segmented,
.tab,
.nav-item {
  border: none;
  border-radius: 12px;
  transition: 0.25s ease;
}

.pill-button,
.ghost-button,
.secondary-button,
.segmented,
.tab,
.nav-item {
  padding: 10px 14px;
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--card-border);
}

.primary-button {
  padding: 11px 16px;
  background: linear-gradient(135deg, var(--primary), #5f9cfb);
  color: white;
  font-weight: 600;
  box-shadow: 0 12px 20px rgba(92, 101, 255, 0.38);
}

.primary-button:hover,
.secondary-button:hover,
.ghost-button:hover,
.tab:hover,
.segmented:hover,
.nav-item:hover {
  transform: translateY(-1px);
}

.user-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 14px;
  border: 1px solid var(--card-border);
  background: rgba(255, 255, 255, 0.02);
}

.user-chip img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
}

.user-chip div {
  display: flex;
  flex-direction: column;
}

.user-chip span {
  color: var(--muted);
  font-size: 0.68rem;
  text-transform: capitalize;
}

.top-nav {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 20px 0;
}

.nav-item {
  background: rgba(255, 255, 255, 0.02);
}

.nav-item.active,
.tab.active,
.segmented.active {
  background: linear-gradient(135deg, rgba(124, 92, 255, 0.18), rgba(49, 208, 170, 0.12));
  border-color: rgba(124, 92, 255, 0.45);
}

.content-area {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.hero-panel {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
  padding: 22px;
  border-radius: 24px;
  border: 1px solid var(--card-border);
  background: linear-gradient(135deg, rgba(25, 34, 58, 0.9), rgba(12, 18, 31, 0.9));
}

.badge {
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #dfe7ff;
  background: rgba(124, 92, 255, 0.18);
  border: 1px solid rgba(124, 92, 255, 0.38);
}

.hero-copy h2 {
  margin: 20px 0 14px;
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 1.05;
}

.hero-copy p {
  max-width: 640px;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.hero-stats {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-content: center;
}

.stat-card {
  padding: 18px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid var(--card-border);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stat-card span {
  color: var(--muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.stat-card strong {
  font-size: 1.5rem;
}

.category-tabs {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 10px 2px;
}

.category-tabs::-webkit-scrollbar {
  display: none;
}

.tab {
  flex: 0 0 auto;
  white-space: nowrap;
}

.panel-section {
  background: rgba(13, 20, 32, 0.76);
  border: 1px solid var(--card-border);
  border-radius: 22px;
  padding: 20px;
  box-shadow: var(--shadow);
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.section-head h3 {
  margin: 0;
  font-size: 1.5rem;
}

.match-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 18px;
}

.match-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  min-height: 260px;
  padding: 16px;
  border-radius: 18px;
  border: 1px solid var(--card-border);
  background: linear-gradient(180deg, rgba(17, 24, 39, 0.9), rgba(12, 18, 31, 0.95));
}

.match-header,
.match-card-top,
.mini-stat-row,
.meta-row,
.leaderboard-item,
.wallet-actions,
.profile-links,
.field-row,
.admin-form,
.match-header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.match-header,
.match-card-top,
.mini-stat-row,
.meta-row {
  align-items: center;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 999px;
  text-transform: capitalize;
}

.status-badge.upcoming {
  background: rgba(49, 208, 170, 0.12);
  color: #75f0d2;
}

.status-badge.live {
  background: rgba(255, 183, 3, 0.12);
  color: #ffd166;
}

.status-badge.completed {
  background: rgba(255, 107, 107, 0.12);
  color: #ff9b9b;
}

.match-time {
  color: var(--muted);
  font-size: 0.8rem;
}

.match-body h4 {
  margin: 0;
  font-size: 1.3rem;
}

.match-body p,
.meta-row,
.mini-stat-row,
.transactions-panel li span,
.broadcast-list li span,
.restricted-state,
.field-row label,
.admin-form input,
.admin-form textarea,
.admin-form select {
  color: var(--muted);
}

.meta-row,
.mini-stat-row {
  flex-wrap: wrap;
  margin-top: 8px;
  font-size: 0.82rem;
}

.card-actions {
  margin-top: auto;
}

.tab-switchers {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}

.segmented {
  padding: 10px 18px;
}

.compact-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.match-card.compact {
  min-height: 180px;
}

.match-card-top p {
  margin: 0;
  font-weight: 600;
}

.empty-state,
.restricted-state {
  padding: 26px;
  border: 1px dashed var(--card-border);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
  text-align: center;
  color: var(--muted);
}

.two-column-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
}

.wallet-summary {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 18px;
}

.wallet-box {
  padding: 18px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--card-border);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.wallet-box span {
  color: var(--muted);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.wallet-box strong {
  font-size: 1.8rem;
}

.wallet-box.highlight {
  background: rgba(49, 208, 170, 0.08);
  border-color: rgba(49, 208, 170, 0.2);
}

.wallet-actions,
.profile-links {
  flex-wrap: wrap;
  margin-top: 14px;
}

.transactions-panel {
  margin-top: 20px;
}

.transactions-panel h4 {
  margin: 0 0 12px;
}

.transactions-panel ul,
.broadcast-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.transactions-panel li,
.broadcast-list li,
.leaderboard-item {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--card-border);
}

.transactions-panel li div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.amount-wrap {
  text-align: right;
}

.tx-status {
  display: inline-flex;
  justify-content: center;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 0.7rem;
  text-transform: capitalize;
}

.tx-status.success {
  background: rgba(49, 208, 170, 0.12);
  color: #82efc0;
}

.tx-status.pending {
  background: rgba(255, 183, 3, 0.12);
  color: #ffd166;
}

.leaderboard-list {
  display: grid;
  gap: 12px;
}

.leaderboard-user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.leaderboard-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
}

.leaderboard-user div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.leaderboard-user span {
  font-size: 0.75rem;
  color: var(--muted);
}

.rank-pill {
  display: inline-grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(124, 92, 255, 0.18);
  color: #d9d0ff;
  font-weight: 700;
}

.profile-form,
.admin-box {
  display: grid;
  gap: 16px;
}

.field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

label {
  display: grid;
  gap: 8px;
  color: var(--muted);
  font-size: 0.8rem;
}

input,
textarea,
select {
  width: 100%;
  border: 1px solid var(--card-border);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border-radius: 12px;
  padding: 12px 14px;
}

.admin-form {
  display: grid;
  gap: 10px;
}

.admin-box {
  padding: 14px;
  border: 1px solid var(--card-border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
}

.admin-box h4 {
  margin: 0;
}

.broadcast-list li {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.auth-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 20px;
}

.auth-card {
  width: min(100%, 460px);
  border-radius: 24px;
  background: rgba(15, 21, 36, 0.9);
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow);
  padding: 28px 22px;
}

.auth-card h2 {
  margin: 10px 0 8px;
  text-align: center;
}

.auth-card p {
  margin: 0 0 20px;
  text-align: center;
  color: var(--muted);
}

.auth-form {
  display: grid;
  gap: 14px;
}

.auth-submit,
.auth-toggle {
  width: 100%;
}

@media (max-width: 980px) {
  .hero-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .topbar,
  .top-actions,
  .hero-actions,
  .field-row,
  .wallet-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .user-chip {
    justify-content: center;
  }

  .hero-panel,
  .panel-section {
    padding: 16px;
  }

  .app-shell {
    padding-left: 12px;
    padding-right: 12px;
  }
}
