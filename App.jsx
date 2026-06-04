import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  LayoutDashboard, FileSignature, LayoutTemplate, Users, Settings, ScrollText,
  Search, Plus, Bell, ChevronLeft, MoreHorizontal, Send, Trash2, Type, PenTool,
  CheckSquare, Calendar, CreditCard, ShieldCheck, Lock, Download, X, Check,
  Mail, Phone, Clock, Eye, FileText, ArrowLeft, Sparkles, GripVertical,
  CircleDollarSign, TrendingUp, UserPlus, Palette, KeyRound, Smartphone, Globe,
  MapPin, Monitor, Fingerprint, BadgeCheck, Building2, Zap, ChevronDown,
  MessageCircle, LogOut, Copy, Ban, Link2, Share2, HelpCircle, User as UserIcon,
  Filter, CheckCircle2, AlertCircle, Inbox
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";

/* ============================================================
   EASY2SIGN — design system
   ============================================================ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@500;700;900&family=Assistant:wght@400;500;600;700;800&display=swap');

:root{
  --ink:#15182b; --ink-2:#222742; --ink-3:#3a4060;
  --paper:#f4f1ea; --paper-2:#efeae0;
  --surface:#ffffff; --surface-2:#fbf9f4;
  --line:#e7e2d6; --line-2:#dfd9ca;
  --muted:#7c7a73; --muted-2:#9a978d;
  --accent:#0f7a58; --accent-2:#0c6649; --accent-soft:#e3f1ea; --accent-ink:#0a4d38;
  --gold:#bd9442; --gold-soft:#f6efdd;
  --blue:#2b6cb0; --blue-soft:#e4eefa;
  --amber:#b5710e; --amber-soft:#f8ecd6;
  --violet:#6b3fa0; --violet-soft:#efe6f8;
  --red:#b3392f; --red-soft:#fae3e0;
  --shadow:0 1px 2px rgba(21,24,43,.04), 0 8px 24px -12px rgba(21,24,43,.18);
  --shadow-lg:0 24px 60px -20px rgba(21,24,43,.35);
  --radius:14px;
}
*{box-sizing:border-box;margin:0;padding:0}
.e2s{font-family:'Assistant',sans-serif;direction:rtl;color:var(--ink);
  background:var(--paper);
  background-image:radial-gradient(circle at 1px 1px, rgba(21,24,43,.025) 1px, transparent 0);
  background-size:22px 22px;
  min-height:100vh;-webkit-font-smoothing:antialiased}
.serif{font-family:'Frank Ruhl Libre',serif}
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}
input,select,textarea{font-family:inherit}
::-webkit-scrollbar{width:10px;height:10px}
::-webkit-scrollbar-thumb{background:var(--line-2);border-radius:8px;border:2px solid transparent;background-clip:padding-box}

/* layout */
.shell{display:flex;min-height:100vh}
.side{width:264px;background:var(--ink);color:#dcdce6;display:flex;flex-direction:column;
  position:sticky;top:0;height:100vh;flex-shrink:0;
  background-image:radial-gradient(circle at 90% 0%, rgba(15,122,88,.22), transparent 55%)}
.brand{display:flex;align-items:center;gap:11px;padding:22px 22px 18px}
.brand-mark{width:40px;height:40px;border-radius:11px;display:grid;place-items:center;
  background:linear-gradient(140deg,var(--accent),var(--accent-2));box-shadow:0 6px 16px -6px rgba(15,122,88,.7);flex-shrink:0}
.brand-name{font-weight:800;letter-spacing:.5px;font-size:18px;color:#fff;line-height:1}
.brand-name b{color:var(--accent);font-weight:800}
.brand-sub{font-size:11px;color:#8a8ca6;letter-spacing:2px;margin-top:3px}
.nav{padding:8px 12px;display:flex;flex-direction:column;gap:2px;flex:1}
.nav-label{font-size:11px;color:#71749a;letter-spacing:1px;padding:14px 12px 6px;font-weight:600}
.nav-item{display:flex;align-items:center;gap:12px;padding:11px 13px;border-radius:11px;
  color:#b6b8cf;font-weight:600;font-size:14.5px;transition:.16s;width:100%;text-align:right;position:relative}
.nav-item:hover{background:rgba(255,255,255,.05);color:#fff}
.nav-item.on{background:linear-gradient(100deg,rgba(15,122,88,.95),rgba(12,102,73,.9));color:#fff;
  box-shadow:0 8px 20px -10px rgba(15,122,88,.9)}
.nav-item .badge{margin-inline-start:auto;background:rgba(255,255,255,.14);color:#fff;font-size:11px;
  padding:1px 8px;border-radius:20px;font-weight:700}
.nav-item.on .badge{background:rgba(255,255,255,.22)}
.side-foot{padding:14px;border-top:1px solid rgba(255,255,255,.07)}
.ws-card{display:flex;align-items:center;gap:11px;padding:10px;border-radius:12px;background:rgba(255,255,255,.05)}
.ws-logo{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--gold),#9c7a2e);
  display:grid;place-items:center;color:#fff;font-weight:800;flex-shrink:0}
.main{flex:1;min-width:0;display:flex;flex-direction:column}
.top{height:68px;display:flex;align-items:center;gap:16px;padding:0 30px;
  border-bottom:1px solid var(--line);background:rgba(244,241,234,.8);backdrop-filter:blur(8px);
  position:sticky;top:0;z-index:20}
.searchbox{display:flex;align-items:center;gap:9px;background:var(--surface);border:1px solid var(--line);
  border-radius:11px;padding:9px 13px;width:340px;max-width:38vw;color:var(--muted)}
.searchbox input{border:none;outline:none;background:none;width:100%;font-size:14px;color:var(--ink)}
.icon-btn{width:40px;height:40px;border-radius:11px;display:grid;place-items:center;color:var(--ink-3);
  border:1px solid var(--line);background:var(--surface);transition:.15s;position:relative}
.icon-btn:hover{border-color:var(--ink-3);color:var(--ink)}
.dot{position:absolute;top:8px;left:9px;width:8px;height:8px;border-radius:50%;background:var(--red);border:2px solid var(--surface)}
.me{display:flex;align-items:center;gap:10px;padding:5px 5px 5px 12px;border:1px solid var(--line);border-radius:30px;background:var(--surface)}
.avatar{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--ink-3),var(--ink));color:#fff;
  display:grid;place-items:center;font-weight:700;font-size:13px;flex-shrink:0}
.content{padding:30px;flex:1}

/* buttons */
.btn{display:inline-flex;align-items:center;gap:8px;padding:11px 18px;border-radius:11px;font-weight:700;
  font-size:14.5px;transition:.16s;white-space:nowrap}
.btn-primary{background:linear-gradient(140deg,var(--accent),var(--accent-2));color:#fff;
  box-shadow:0 10px 22px -10px rgba(15,122,88,.8)}
.btn-primary:hover{transform:translateY(-1px);box-shadow:0 16px 28px -10px rgba(15,122,88,.9)}
.btn-ghost{background:var(--surface);border:1px solid var(--line);color:var(--ink)}
.btn-ghost:hover{border-color:var(--ink-3)}
.btn-dark{background:var(--ink);color:#fff}
.btn-dark:hover{background:var(--ink-2)}
.btn-sm{padding:8px 13px;font-size:13.5px;border-radius:9px}

/* headings */
.h1{font-size:30px;font-weight:800;letter-spacing:-.5px}
.h1.serif{font-weight:700}
.page-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:26px;flex-wrap:wrap}
.page-sub{color:var(--muted);font-size:15px;margin-top:4px}

/* cards */
.card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow)}
.kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:22px}
.kpi{padding:20px}
.kpi-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.kpi-ic{width:42px;height:42px;border-radius:12px;display:grid;place-items:center}
.kpi-val{font-size:30px;font-weight:800;letter-spacing:-1px;line-height:1}
.kpi-label{color:var(--muted);font-size:13.5px;font-weight:600;margin-top:6px}
.kpi-trend{font-size:12.5px;font-weight:700;display:inline-flex;align-items:center;gap:3px;
  padding:3px 8px;border-radius:8px;background:var(--accent-soft);color:var(--accent-ink)}
.grid-2{display:grid;grid-template-columns:1.6fr 1fr;gap:18px;margin-bottom:18px}
.panel{padding:22px}
.panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
.panel-title{font-weight:800;font-size:17px}

/* status pill */
.pill{display:inline-flex;align-items:center;gap:6px;padding:4px 11px;border-radius:30px;font-size:12.5px;font-weight:700}
.pill .pdot{width:7px;height:7px;border-radius:50%}
.st-draft{background:#eceae3;color:#6a675f} .st-draft .pdot{background:#9a978d}
.st-sent{background:var(--blue-soft);color:var(--blue)} .st-sent .pdot{background:var(--blue)}
.st-viewed{background:var(--amber-soft);color:var(--amber)} .st-viewed .pdot{background:var(--amber)}
.st-partial{background:var(--violet-soft);color:var(--violet)} .st-partial .pdot{background:var(--violet)}
.st-completed{background:var(--accent-soft);color:var(--accent-ink)} .st-completed .pdot{background:var(--accent)}
.st-voided{background:var(--red-soft);color:var(--red)} .st-voided .pdot{background:var(--red)}

/* table */
.tbl{width:100%;border-collapse:collapse}
.tbl th{text-align:right;font-size:12.5px;color:var(--muted);font-weight:700;padding:0 16px 12px;letter-spacing:.3px}
.tbl td{padding:15px 16px;border-top:1px solid var(--line);font-size:14.5px;vertical-align:middle}
.tbl tr:hover td{background:var(--surface-2)}
.doc-name{font-weight:700;display:flex;align-items:center;gap:11px}
.doc-ic{width:38px;height:38px;border-radius:10px;background:var(--paper-2);display:grid;place-items:center;color:var(--ink-3);flex-shrink:0}
.row-acts{display:flex;gap:6px;justify-content:flex-end}
.mini{width:34px;height:34px;border-radius:9px;display:grid;place-items:center;color:var(--muted);transition:.15s}
.mini:hover{background:var(--paper-2);color:var(--ink)}

/* filters */
.filters{display:flex;gap:8px;margin-bottom:18px;flex-wrap:wrap;align-items:center}
.chip{padding:8px 15px;border-radius:30px;border:1px solid var(--line);background:var(--surface);
  font-weight:700;font-size:13.5px;color:var(--muted);transition:.15s}
.chip:hover{border-color:var(--ink-3);color:var(--ink)}
.chip.on{background:var(--ink);color:#fff;border-color:var(--ink)}

/* activity */
.feed{display:flex;flex-direction:column;gap:2px}
.fe{display:flex;gap:13px;padding:11px 4px;border-radius:10px}
.fe-ic{width:36px;height:36px;border-radius:10px;display:grid;place-items:center;flex-shrink:0}
.fe-txt{font-size:14px;line-height:1.45}
.fe-txt b{font-weight:700}
.fe-time{font-size:12.5px;color:var(--muted-2);margin-top:2px}

/* builder */
.builder{display:grid;grid-template-columns:230px 1fr 290px;gap:18px;height:calc(100vh - 130px)}
.bcol{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);
  display:flex;flex-direction:column;overflow:hidden;box-shadow:var(--shadow)}
.bcol-head{padding:16px 18px;border-bottom:1px solid var(--line);font-weight:800;font-size:14.5px;display:flex;align-items:center;gap:8px}
.bcol-body{padding:14px;overflow:auto;flex:1}
.tool{display:flex;align-items:center;gap:11px;padding:12px;border:1.5px dashed var(--line-2);border-radius:11px;
  margin-bottom:9px;font-weight:700;font-size:14px;background:var(--surface-2);transition:.15s;user-select:none;touch-action:none}
.tool:hover{border-color:var(--accent);background:var(--accent-soft);transform:translateY(-1px)}
.tool-ic{width:34px;height:34px;border-radius:9px;display:grid;place-items:center;background:#fff;border:1px solid var(--line);flex-shrink:0}
.canvas-wrap{flex:1;overflow:auto;background:var(--paper-2);padding:26px;display:flex;flex-direction:column;align-items:center;gap:20px}
.page{width:100%;max-width:620px;aspect-ratio:1/1.32;background:#fff;border-radius:8px;position:relative;
  box-shadow:var(--shadow-lg);overflow:hidden;flex-shrink:0}
.page-lines{position:absolute;inset:0;padding:46px 44px;opacity:.5}
.page-ln{height:11px;border-radius:6px;background:var(--paper-2);margin-bottom:15px}
.page-num{position:absolute;bottom:12px;left:0;right:0;text-align:center;font-size:12px;color:var(--muted-2)}
.placed{position:absolute;border-radius:8px;border:1.5px solid;display:flex;align-items:center;gap:7px;
  padding:8px 10px;font-size:12.5px;font-weight:700;cursor:grab;user-select:none;touch-action:none;
  background:#fff;box-shadow:0 4px 12px -4px rgba(0,0,0,.18);transition:box-shadow .15s}
.placed:hover{box-shadow:0 10px 22px -6px rgba(0,0,0,.28)}
.placed .pdel{margin-inline-start:4px;opacity:0;transition:.15s}
.placed:hover .pdel{opacity:.6}
.placed .pdel:hover{opacity:1}
.ghost{position:fixed;pointer-events:none;z-index:999;background:#fff;border:1.5px solid var(--accent);
  border-radius:8px;padding:8px 11px;font-weight:700;font-size:12.5px;display:flex;align-items:center;gap:7px;
  box-shadow:var(--shadow-lg);opacity:.92}
.signer-row{display:flex;align-items:center;gap:10px;padding:11px;border:1px solid var(--line);border-radius:11px;margin-bottom:9px}
.signer-color{width:13px;height:13px;border-radius:4px;flex-shrink:0}
.signer-info{flex:1;min-width:0}
.signer-name{font-weight:700;font-size:13.5px}
.signer-role{font-size:12px;color:var(--muted)}
.add-line{display:flex;align-items:center;gap:8px;width:100%;padding:11px;border:1.5px dashed var(--line-2);
  border-radius:11px;color:var(--accent);font-weight:700;font-size:13.5px;justify-content:center;transition:.15s}
.add-line:hover{border-color:var(--accent);background:var(--accent-soft)}
.seg{display:flex;background:var(--paper-2);border-radius:10px;padding:3px;margin-bottom:14px}
.seg button{flex:1;padding:8px;border-radius:8px;font-weight:700;font-size:13px;color:var(--muted)}
.seg button.on{background:#fff;color:var(--ink);box-shadow:var(--shadow)}

/* field input look */
.lbl{font-size:12.5px;font-weight:700;color:var(--muted);margin-bottom:6px;display:block}
.inp{width:100%;padding:11px 13px;border:1px solid var(--line);border-radius:10px;font-size:14px;
  background:var(--surface-2);outline:none;transition:.15s}
.inp:focus{border-color:var(--accent);background:#fff;box-shadow:0 0 0 3px var(--accent-soft)}

/* modal / overlay */
.overlay{position:fixed;inset:0;background:rgba(21,24,43,.55);backdrop-filter:blur(4px);z-index:100;
  display:flex;align-items:center;justify-content:center;padding:24px;animation:fade .2s}
@keyframes fade{from{opacity:0}to{opacity:1}}
.modal{background:var(--surface);border-radius:18px;width:100%;max-width:520px;box-shadow:var(--shadow-lg);
  animation:pop .25s cubic-bezier(.2,.8,.3,1);max-height:90vh;overflow:auto}
@keyframes pop{from{transform:translateY(20px) scale(.97);opacity:0}to{transform:none;opacity:1}}
.modal-head{padding:22px 24px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between}

/* SIGNING (full screen) */
.sign-stage{position:fixed;inset:0;z-index:200;background:var(--paper);
  background-image:radial-gradient(circle at 1px 1px, rgba(21,24,43,.025) 1px, transparent 0);background-size:22px 22px;
  display:flex;flex-direction:column;overflow:auto}
.sign-bar{height:62px;display:flex;align-items:center;justify-content:space-between;padding:0 26px;
  border-bottom:1px solid var(--line);background:var(--surface)}
.secure-tag{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;font-weight:700;color:var(--accent-ink);
  background:var(--accent-soft);padding:5px 12px;border-radius:30px}
.sign-body{flex:1;display:flex;align-items:flex-start;justify-content:center;padding:34px 20px}
.sign-card{background:var(--surface);border:1px solid var(--line);border-radius:20px;box-shadow:var(--shadow-lg);
  width:100%;max-width:460px;padding:34px;animation:pop .3s}
.sign-doc{width:100%;max-width:640px}
.otp-row{display:flex;gap:10px;direction:ltr;justify-content:center;margin:22px 0}
.otp-row input{width:54px;height:62px;text-align:center;font-size:26px;font-weight:800;border:1.5px solid var(--line);
  border-radius:13px;outline:none;background:var(--surface-2)}
.otp-row input:focus{border-color:var(--accent);background:#fff;box-shadow:0 0 0 3px var(--accent-soft)}
.field-card{border:1px solid var(--line);border-radius:14px;padding:16px;margin-bottom:13px;background:var(--surface);transition:.18s}
.field-card.done{border-color:var(--accent);background:var(--accent-soft)}
.field-card.active{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
.sigpad{border:1.5px dashed var(--line-2);border-radius:13px;background:var(--surface-2);position:relative;touch-action:none}
.sigpad canvas{display:block;width:100%;border-radius:13px}
.pad-hint{position:absolute;inset:0;display:grid;place-items:center;color:var(--muted-2);font-weight:700;pointer-events:none}

/* checkout */
.checkout{background:linear-gradient(160deg,#fff,var(--surface-2));border:1px solid var(--line);border-radius:16px;padding:22px}
.pay-brand{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;
  padding-bottom:16px;border-bottom:1px solid var(--line)}
.amount-big{font-size:36px;font-weight:800;letter-spacing:-1px}
.card-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.success-ring{width:88px;height:88px;border-radius:50%;background:var(--accent-soft);display:grid;place-items:center;margin:0 auto 18px;
  animation:pop .4s}
.seal{width:120px;height:120px;border-radius:50%;border:3px dashed var(--gold);display:grid;place-items:center;
  margin:0 auto;color:var(--gold);position:relative;background:var(--gold-soft)}

/* misc */
.tmpl-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.tmpl{padding:0;overflow:hidden;transition:.18s}
.tmpl:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg)}
.tmpl-prev{height:140px;background:var(--paper-2);position:relative;padding:20px;border-bottom:1px solid var(--line)}
.tmpl-body{padding:16px 18px}
.toggle{width:44px;height:25px;border-radius:30px;background:var(--line-2);position:relative;transition:.2s;flex-shrink:0}
.toggle.on{background:var(--accent)}
.toggle i{position:absolute;top:3px;right:3px;width:19px;height:19px;border-radius:50%;background:#fff;transition:.2s;box-shadow:0 2px 4px rgba(0,0,0,.2)}
.toggle.on i{right:22px}
.set-grid{display:grid;grid-template-columns:230px 1fr;gap:24px;align-items:start}
.set-nav{display:flex;flex-direction:column;gap:3px;position:sticky;top:98px}
.set-nav button{text-align:right;padding:11px 14px;border-radius:11px;font-weight:700;font-size:14px;color:var(--muted);transition:.15s}
.set-nav button:hover{background:var(--surface);color:var(--ink)}
.set-nav button.on{background:var(--surface);color:var(--ink);box-shadow:var(--shadow);border:1px solid var(--line)}
.swatch{width:34px;height:34px;border-radius:9px;border:2px solid var(--surface);box-shadow:0 0 0 1px var(--line);cursor:pointer;transition:.15s}
.swatch.on{box-shadow:0 0 0 2px var(--ink);transform:scale(1.08)}
.role-tag{font-size:11.5px;font-weight:700;padding:3px 9px;border-radius:20px}
.r-admin{background:var(--ink);color:#fff}
.r-creator{background:var(--accent-soft);color:var(--accent-ink)}
.r-viewer{background:var(--paper-2);color:var(--muted)}
.fade-up{animation:fadeUp .4s cubic-bezier(.2,.8,.3,1) backwards}
@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}

/* dropdown menus */
.dd-wrap{position:relative}
.dd{position:absolute;top:calc(100% + 8px);min-width:220px;background:var(--surface);border:1px solid var(--line);
  border-radius:14px;box-shadow:var(--shadow-lg);padding:7px;z-index:60;animation:pop .16s}
.dd.left{left:0} .dd.right{right:0}
.dd-item{display:flex;align-items:center;gap:11px;width:100%;padding:10px 12px;border-radius:10px;
  font-weight:600;font-size:14px;color:var(--ink);text-align:right;transition:.13s}
.dd-item:hover{background:var(--surface-2)}
.dd-item.danger{color:var(--red)} .dd-item.danger:hover{background:var(--red-soft)}
.dd-sep{height:1px;background:var(--line);margin:6px 4px}
.dd-head{padding:11px 13px 9px;display:flex;align-items:center;justify-content:space-between}
.notif{display:flex;gap:11px;padding:11px;border-radius:11px;transition:.13s;cursor:pointer}
.notif:hover{background:var(--surface-2)}
.notif-ic{width:36px;height:36px;border-radius:10px;display:grid;place-items:center;flex-shrink:0}
.unread{width:8px;height:8px;border-radius:50%;background:var(--accent);flex-shrink:0;margin-top:6px}

/* whatsapp */
.wa{color:#1faa54}
.chan{flex:1;display:flex;align-items:center;justify-content:center;gap:7px;padding:11px;border-radius:11px;
  border:1.5px solid var(--line);font-weight:700;font-size:13.5px;color:var(--muted);transition:.15s;background:var(--surface)}
.chan:hover{border-color:var(--ink-3);color:var(--ink)}
.chan.on{border-color:var(--accent);background:var(--accent-soft);color:var(--accent-ink)}
.chan.wa.on{border-color:#1faa54;background:#e4f6ea;color:#147a3c}

/* toast */
.toast-wrap{position:fixed;bottom:26px;left:50%;transform:translateX(-50%);z-index:300;display:flex;flex-direction:column;gap:10px;align-items:center}
.toast{display:flex;align-items:center;gap:10px;background:var(--ink);color:#fff;padding:13px 20px;border-radius:13px;
  font-weight:700;font-size:14.5px;box-shadow:var(--shadow-lg);animation:toastIn .3s cubic-bezier(.2,.8,.3,1)}
@keyframes toastIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}

/* login / exit screen */
.login-stage{position:fixed;inset:0;z-index:400;background:var(--ink);display:flex;align-items:center;justify-content:center;padding:24px;
  background-image:radial-gradient(circle at 80% 10%, rgba(15,122,88,.28), transparent 50%),radial-gradient(circle at 10% 90%, rgba(189,148,66,.16), transparent 45%)}
.login-card{background:var(--surface);border-radius:22px;width:100%;max-width:410px;padding:38px 34px;box-shadow:var(--shadow-lg);animation:pop .3s}
.login-foot{text-align:center;margin-top:22px;color:#8a8ca6;font-size:12.5px}

/* send-modal signer line */
.sm-signer{display:flex;align-items:center;gap:11px;padding:12px;border:1px solid var(--line);border-radius:12px;margin-bottom:10px}
@media(max-width:1100px){.kpis{grid-template-columns:repeat(2,1fr)}.grid-2{grid-template-columns:1fr}.builder{grid-template-columns:1fr}.tmpl-grid{grid-template-columns:1fr 1fr}.set-grid{grid-template-columns:1fr}}
`;

/* ============================================================ mock data */
const STATUS = {
  draft:{cls:"st-draft",label:"טיוטה"}, sent:{cls:"st-sent",label:"נשלח"},
  viewed:{cls:"st-viewed",label:"נצפה"}, partial:{cls:"st-partial",label:"חתום חלקית"},
  completed:{cls:"st-completed",label:"הושלם"}, voided:{cls:"st-voided",label:"בוטל"},
};
const DOCS = [
  {id:1,title:"הסכם שכירות משנה — ארנון 5, ת״א",status:"completed",signers:2,amount:0,date:"04/06/26",by:"נתנאל"},
  {id:2,title:"הסכם העסקה — אורי כהן",status:"partial",signers:2,amount:0,date:"02/06/26",by:"נתנאל"},
  {id:3,title:"הצעת מחיר — שירותי שיווק דיגיטלי",status:"viewed",signers:1,amount:4800,date:"01/06/26",by:"רותם"},
  {id:4,title:"טופס הצטרפות מטופל — מרפאת איילה",status:"sent",signers:1,amount:0,date:"31/05/26",by:"רותם"},
  {id:5,title:"חוזה שירות חודשי — ריטיינר",status:"completed",signers:1,amount:2500,date:"28/05/26",by:"נתנאל"},
  {id:6,title:"כתב הרשאה לחיוב חוזר",status:"draft",signers:1,amount:0,date:"27/05/26",by:"נתנאל"},
  {id:7,title:"הסכם סודיות (NDA) — ספק",status:"voided",signers:2,amount:0,date:"24/05/26",by:"רותם"},
];
const ACTIVITY = [
  {ic:Check,tint:"completed",txt:[<b key="1">דנה לוי</b>," חתמה על ","הסכם שכירות משנה"],time:"לפני 12 דקות"},
  {ic:CircleDollarSign,tint:"completed",txt:["התקבל תשלום של ",<b key="2">2,500 ₪</b>," — חוזה שירות חודשי"],time:"לפני שעה"},
  {ic:Eye,tint:"viewed",txt:[<b key="3">משה ברק</b>," צפה ב","הצעת מחיר — שיווק דיגיטלי"],time:"לפני 3 שעות"},
  {ic:Send,tint:"sent",txt:["נשלח ","טופס הצטרפות מטופל"," אל 4 נמענים"],time:"אתמול, 16:20"},
  {ic:Fingerprint,tint:"partial",txt:[<b key="4">אורי כהן</b>," אימת זהות (OTP) בהסכם העסקה"],time:"אתמול, 11:05"},
];
const monthly = [
  {m:"ינו",docs:18,rev:9200},{m:"פבר",docs:24,rev:12400},{m:"מרץ",docs:31,rev:15800},
  {m:"אפר",docs:28,rev:14100},{m:"מאי",docs:39,rev:21600},{m:"יוני",docs:46,rev:27300},
];
const statusPie = [
  {name:"הושלמו",value:142,color:"#0f7a58"},{name:"בהמתנה",value:38,color:"#b5710e"},
  {name:"נצפו",value:21,color:"#2b6cb0"},{name:"טיוטות",value:14,color:"#9a978d"},
];
const USERS = [
  {name:"נתנאל אזולאי",email:"netanel@easy2sign.co.il",role:"admin",last:"עכשיו"},
  {name:"רותם שגב",email:"rotem@easy2sign.co.il",role:"creator",last:"לפני שעה"},
  {name:"אורי כהן",email:"uri@easy2sign.co.il",role:"creator",last:"אתמול"},
  {name:"מאיה דהן",email:"maya@easy2sign.co.il",role:"viewer",last:"לפני 3 ימים"},
];
const TEMPLATES = [
  {id:1,title:"הסכם העסקה",fields:8,pub:false,ic:FileText},
  {id:2,title:"הצעת מחיר + תשלום",fields:6,pub:true,ic:CreditCard},
  {id:3,title:"טופס הצטרפות מטופל",fields:5,pub:true,ic:UserPlus},
  {id:4,title:"NDA — הסכם סודיות",fields:4,pub:false,ic:Lock},
  {id:5,title:"כתב הרשאה לחיוב חוזר",fields:7,pub:false,ic:CircleDollarSign},
  {id:6,title:"הסכם שכירות",fields:11,pub:false,ic:ScrollText},
];
const FIELD_TYPES = [
  {type:"signature",label:"חתימה",ic:PenTool,color:"#0f7a58"},
  {type:"text",label:"שדה טקסט",ic:Type,color:"#2b6cb0"},
  {type:"date",label:"תאריך",ic:Calendar,color:"#6b3fa0"},
  {type:"checkbox",label:"תיבת סימון",ic:CheckSquare,color:"#b5710e"},
  {type:"payment",label:"בלוק תשלום",ic:CreditCard,color:"#bd9442"},
];
const SIGNER_COLORS = ["#0f7a58","#2b6cb0","#b5710e","#6b3fa0"];

/* ============================================================ small comps */
const Pill = ({s}) => (
  <span className={`pill ${STATUS[s].cls}`}><span className="pdot"/>{STATUS[s].label}</span>
);
const tintMap = {completed:["var(--accent-soft)","var(--accent)"],viewed:["var(--blue-soft)","var(--blue)"],
  sent:["var(--blue-soft)","var(--blue)"],partial:["var(--violet-soft)","var(--violet)"]};

/* brand: wordmark with signature underline (concept 4) */
function Wordmark({color="#15182b",accent="#0f7a58",height=28}){
  const w=height*(210/56);
  return (
    <svg width={w} height={height} viewBox="0 0 210 56" style={{display:"block"}} aria-label="EASY2SIGN">
      <text x="105" y="31" textAnchor="middle" fontFamily="'Assistant',sans-serif" fontWeight="800"
        fontSize="31" letterSpacing="1" fill={color}>easy<tspan fill={accent}>2</tspan>sign</text>
      <path d="M22 45 Q70 55 120 45 T196 41 q5 -1 9 -7" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}
/* compact mark for square tiles / favicons */
function MarkTile({size=34,bg="#0f7a58",radius=9}){
  return (
    <div style={{width:size,height:size,borderRadius:radius,background:bg,display:"grid",placeItems:"center",flexShrink:0}}>
      <svg width={size*0.64} height={size*0.64} viewBox="0 0 40 40">
        <text x="20" y="27" textAnchor="middle" fontFamily="'Assistant',sans-serif" fontWeight="800" fontSize="23" fill="#fff">2</text>
        <path d="M8 33 Q20 38 32 31" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

/* ============================================================ Dashboard */
function Dashboard({onNew,onSeeAll}){
  const kpis = [
    {ic:FileSignature,val:"46",label:"מסמכים החודש",trend:"+18%",bg:"var(--accent-soft)",c:"var(--accent)"},
    {ic:Clock,val:"38",label:"ממתינים לחתימה",trend:"בתהליך",bg:"var(--amber-soft)",c:"var(--amber)"},
    {ic:BadgeCheck,val:"142",label:"הושלמו ונחתמו",trend:"+24%",bg:"var(--violet-soft)",c:"var(--violet)"},
    {ic:CircleDollarSign,val:"27,300 ₪",label:"נגבה החודש",trend:"+31%",bg:"var(--gold-soft)",c:"var(--gold)"},
  ];
  return (
    <div className="fade-up">
      <div className="page-head">
        <div>
          <div className="h1 serif">שלום נתנאל 👋</div>
          <div className="page-sub">תמונת מצב של החתימות והתשלומים שלך ב־EASY2SIGN</div>
        </div>
        <button className="btn btn-primary" onClick={onNew}><Plus size={18}/> מסמך חדש</button>
      </div>

      <div className="kpis">
        {kpis.map((k,i)=>(
          <div className="card kpi fade-up" key={i} style={{animationDelay:`${i*60}ms`}}>
            <div className="kpi-top">
              <div className="kpi-ic" style={{background:k.bg}}><k.ic size={22} style={{color:k.c}}/></div>
              <span className="kpi-trend"><TrendingUp size={13}/>{k.trend}</span>
            </div>
            <div className="kpi-val">{k.val}</div>
            <div className="kpi-label">{k.label}</div>
          </div>
        ))}
      </div>

      <div className="grid-2">
        <div className="card panel">
          <div className="panel-head">
            <div className="panel-title">פעילות לאורך זמן</div>
            <div style={{display:"flex",gap:14,fontSize:13,fontWeight:700,color:"var(--muted)"}}>
              <span style={{color:"var(--accent)"}}>● מסמכים</span>
              <span style={{color:"var(--gold)"}}>● הכנסות</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={monthly} margin={{right:6,left:-18,top:6}}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0f7a58" stopOpacity={.32}/>
                  <stop offset="100%" stopColor="#0f7a58" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false}/>
              <XAxis dataKey="m" tick={{fontSize:13,fontFamily:"Assistant"}} axisLine={false} tickLine={false} reversed/>
              <YAxis tick={{fontSize:12}} axisLine={false} tickLine={false}/>
              <Tooltip contentStyle={{borderRadius:12,border:"1px solid #eee",fontFamily:"Assistant",direction:"rtl"}}/>
              <Area type="monotone" dataKey="docs" stroke="#0f7a58" strokeWidth={3} fill="url(#g1)" name="מסמכים"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card panel">
          <div className="panel-head"><div className="panel-title">פילוח סטטוסים</div></div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={statusPie} dataKey="value" innerRadius={56} outerRadius={84} paddingAngle={3} stroke="none">
                {statusPie.map((e,i)=><Cell key={i} fill={e.color}/>)}
              </Pie>
              <Tooltip contentStyle={{borderRadius:12,border:"1px solid #eee",fontFamily:"Assistant",direction:"rtl"}}/>
            </PieChart>
          </ResponsiveContainer>
          <div style={{display:"flex",flexDirection:"column",gap:8,marginTop:6}}>
            {statusPie.map((e,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:9,fontSize:13.5}}>
                <span style={{width:10,height:10,borderRadius:3,background:e.color}}/>
                <span style={{fontWeight:600}}>{e.name}</span>
                <span style={{marginInlineStart:"auto",fontWeight:800}}>{e.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card panel">
        <div className="panel-head"><div className="panel-title">פעילות אחרונה</div>
          <button className="btn btn-ghost btn-sm" onClick={onSeeAll}>הצג הכל</button></div>
        <div className="feed">
          {ACTIVITY.map((a,i)=>{
            const [bg,c]=tintMap[a.tint];
            return (
              <div className="fe" key={i}>
                <div className="fe-ic" style={{background:bg}}><a.ic size={17} style={{color:c}}/></div>
                <div><div className="fe-txt">{a.txt}</div><div className="fe-time">{a.time}</div></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ============================================================ Documents */
function Documents({onOpenSign,onBuild,toast}){
  const [filter,setFilter]=useState("all");
  const [q,setQ]=useState("");
  const [menu,setMenu]=useState(null);
  const filters=[["all","הכל"],["completed","הושלמו"],["partial","בתהליך"],["sent","נשלחו"],["draft","טיוטות"]];
  const rows=DOCS.filter(d=>(filter==="all"||d.status===filter||(filter==="partial"&&["partial","viewed"].includes(d.status)))
    && d.title.includes(q));
  return (
    <div className="fade-up">
      <div className="page-head">
        <div><div className="h1 serif">מסמכים</div><div className="page-sub">כל המסמכים, התבניות והחוזים שלך במקום אחד</div></div>
        <button className="btn btn-primary" onClick={onBuild}><Plus size={18}/> מסמך חדש</button>
      </div>
      <div className="filters">
        {filters.map(([k,l])=>(
          <button key={k} className={`chip ${filter===k?"on":""}`} onClick={()=>setFilter(k)}>{l}</button>
        ))}
        <div className="searchbox" style={{marginInlineStart:"auto",width:280}}>
          <Search size={17}/><input placeholder="חיפוש מסמך…" value={q} onChange={e=>setQ(e.target.value)}/>
        </div>
      </div>
      <div className="card" style={{padding:"20px 8px"}}>
        <table className="tbl">
          <thead><tr><th style={{paddingRight:24}}>מסמך</th><th>סטטוס</th><th>חותמים</th><th>תשלום</th><th>נוצר</th><th></th></tr></thead>
          <tbody>
            {rows.map(d=>(
              <tr key={d.id}>
                <td style={{paddingRight:24}}>
                  <div className="doc-name"><div className="doc-ic"><FileText size={18}/></div>
                    <div><div>{d.title}</div><div style={{fontSize:12.5,color:"var(--muted)",fontWeight:500}}>נוצר ע״י {d.by}</div></div>
                  </div>
                </td>
                <td><Pill s={d.status}/></td>
                <td><span style={{fontWeight:700}}>{d.signers}</span> <span style={{color:"var(--muted)",fontSize:13}}>חותמים</span></td>
                <td>{d.amount?<span style={{fontWeight:800,color:"var(--accent-ink)"}}>{d.amount.toLocaleString()} ₪</span>:<span style={{color:"var(--muted-2)"}}>—</span>}</td>
                <td style={{color:"var(--muted)"}}>{d.date}</td>
                <td>
                  <div className="row-acts">
                    <button className="mini" title="תצוגת חתימה" onClick={onOpenSign}><Eye size={17}/></button>
                    <button className="mini" title="הורדת PDF" onClick={()=>toast("המסמך הורד (PDF)")}><Download size={17}/></button>
                    <div className="dd-wrap">
                      <button className="mini" onClick={()=>setMenu(menu===d.id?null:d.id)}><MoreHorizontal size={17}/></button>
                      {menu===d.id&&<>
                        <div style={{position:"fixed",inset:0,zIndex:55}} onClick={()=>setMenu(null)}/>
                        <div className="dd left">
                          <button className="dd-item" onClick={()=>{setMenu(null);toast("הקישור הציבורי הועתק");}}><Link2 size={16}/> העתק קישור</button>
                          <button className="dd-item wa" style={{color:"#147a3c"}} onClick={()=>{setMenu(null);toast("נשלח בוואטסאפ ✓");}}><MessageCircle size={16}/> שלח בוואטסאפ</button>
                          <button className="dd-item" onClick={()=>{setMenu(null);toast("המסמך שוכפל");}}><Copy size={16}/> שכפל מסמך</button>
                          <div className="dd-sep"/>
                          <button className="dd-item" onClick={()=>{setMenu(null);toast("המסמך בוטל");}}><Ban size={16}/> בטל מסמך</button>
                          <button className="dd-item danger" onClick={()=>{setMenu(null);toast("המסמך נמחק");}}><Trash2 size={16}/> מחק</button>
                        </div>
                      </>}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ============================================================ Builder (drag & drop) */
function Builder({onSend,toast}){
  const pageRef=useRef(null);
  const [chan,setChan]=useState("whatsapp");
  const [fields,setFields]=useState([
    {id:1,type:"text",label:"שם מלא",x:12,y:18,signer:0},
    {id:2,type:"signature",label:"חתימה",x:55,y:74,signer:0},
  ]);
  const [signers,setSigners]=useState([
    {name:"דנה לוי",role:"שוכר",email:"dana@mail.com"},
    {name:"נתנאל אזולאי",role:"משכיר",email:"netanel@easy2sign.co.il"},
  ]);
  const [mode,setMode]=useState("serial");
  const [drag,setDrag]=useState(null); // {kind:'new'|'move', type, id, label, color, gx, gy}
  const [active,setActive]=useState(0);
  const nid=useRef(3);

  const ftMeta=t=>FIELD_TYPES.find(f=>f.type===t);

  const startNew=(ft,e)=>{
    e.preventDefault();
    setDrag({kind:"new",type:ft.type,label:ft.label,color:ft.color,gx:e.clientX,gy:e.clientY});
  };
  const startMove=(f,e)=>{
    e.preventDefault();e.stopPropagation();
    setDrag({kind:"move",id:f.id,type:f.type,label:f.label,color:ftMeta(f.type).color,gx:e.clientX,gy:e.clientY});
  };

  useEffect(()=>{
    if(!drag) return;
    const move=e=>setDrag(d=>d?{...d,gx:e.clientX,gy:e.clientY}:d);
    const up=e=>{
      const r=pageRef.current?.getBoundingClientRect();
      if(r){
        const x=((e.clientX-r.left)/r.width)*100, y=((e.clientY-r.top)/r.height)*100;
        const inside=x>=0&&x<=100&&y>=0&&y<=100;
        if(drag.kind==="new"&&inside){
          setFields(f=>[...f,{id:nid.current++,type:drag.type,label:drag.label,
            x:Math.max(2,Math.min(86,x)),y:Math.max(2,Math.min(94,y)),signer:active}]);
        }else if(drag.kind==="move"&&inside){
          setFields(f=>f.map(fl=>fl.id===drag.id?{...fl,x:Math.max(2,Math.min(86,x)),y:Math.max(2,Math.min(94,y))}:fl));
        }
      }
      setDrag(null);
    };
    window.addEventListener("pointermove",move);
    window.addEventListener("pointerup",up);
    return()=>{window.removeEventListener("pointermove",move);window.removeEventListener("pointerup",up);};
  },[drag,active]);

  const del=id=>setFields(f=>f.filter(x=>x.id!==id));
  const addSigner=()=>setSigners(s=>[...s,{name:`חותם ${s.length+1}`,role:"תפקיד",email:""}]);

  return (
    <div className="fade-up">
      <div className="page-head" style={{marginBottom:16}}>
        <div><div className="h1 serif">בנאי המסמך</div><div className="page-sub">גרור שדות אל הדף, שייך לחותמים ושלח לחתימה</div></div>
        <div style={{display:"flex",gap:10}}>
          <button className="btn btn-ghost" onClick={()=>toast("נשמר כתבנית ✓")}>שמור כתבנית</button>
          <button className="btn btn-primary" onClick={onSend}><Send size={17}/> שלח לחתימה</button>
        </div>
      </div>

      <div className="builder">
        {/* palette */}
        <div className="bcol">
          <div className="bcol-head"><Sparkles size={17} style={{color:"var(--accent)"}}/> שדות לגרירה</div>
          <div className="bcol-body">
            {FIELD_TYPES.map(ft=>(
              <div className="tool" key={ft.type} onPointerDown={e=>startNew(ft,e)}>
                <GripVertical size={15} style={{color:"var(--muted-2)"}}/>
                <div className="tool-ic"><ft.ic size={17} style={{color:ft.color}}/></div>
                {ft.label}
              </div>
            ))}
            <div style={{marginTop:14,padding:13,background:"var(--gold-soft)",borderRadius:12,fontSize:12.5,
              color:"var(--ink-3)",fontWeight:600,lineHeight:1.5}}>
              💡 שדה <b>״בלוק תשלום״</b> הופך את המסמך לחתימה+סליקה — הלקוח משלם מיד בסיום החתימה.
            </div>
          </div>
        </div>

        {/* canvas */}
        <div className="bcol">
          <div className="bcol-head" style={{justifyContent:"space-between"}}>
            <span style={{display:"flex",alignItems:"center",gap:8}}><FileText size={17}/> הסכם שכירות.pdf</span>
            <span style={{fontSize:12.5,color:"var(--muted)",fontWeight:600}}>{fields.length} שדות · עמוד 1/1</span>
          </div>
          <div className="canvas-wrap">
            <div className="page" ref={pageRef}>
              <div className="page-lines">
                {[92,80,96,70,88,0,84,76,90,60].map((w,i)=>(
                  <div className="page-ln" key={i} style={{width:w?`${w}%`:0,marginBottom:w?15:30}}/>
                ))}
              </div>
              {fields.map(f=>{
                const meta=ftMeta(f.type), col=SIGNER_COLORS[f.signer%4];
                return (
                  <div key={f.id} className="placed"
                    style={{left:`${f.x}%`,top:`${f.y}%`,borderColor:col,color:col,
                      background:`${col}0f`}}
                    onPointerDown={e=>startMove(f,e)}>
                    <meta.ic size={14}/>{f.label}
                    <button className="pdel" onPointerDown={e=>e.stopPropagation()} onClick={()=>del(f.id)}><X size={13}/></button>
                  </div>
                );
              })}
              <div className="page-num">— 1 —</div>
            </div>
          </div>
        </div>

        {/* signers */}
        <div className="bcol">
          <div className="bcol-head"><Users size={17} style={{color:"var(--accent)"}}/> חותמים וסדר</div>
          <div className="bcol-body">
            <div className="seg">
              <button className={mode==="serial"?"on":""} onClick={()=>setMode("serial")}>סדרתי</button>
              <button className={mode==="parallel"?"on":""} onClick={()=>setMode("parallel")}>מקבילי</button>
            </div>
            {signers.map((s,i)=>(
              <div className="signer-row" key={i} onClick={()=>setActive(i)}
                style={{borderColor:active===i?SIGNER_COLORS[i%4]:"var(--line)",
                  boxShadow:active===i?`0 0 0 2px ${SIGNER_COLORS[i%4]}22`:"none",cursor:"pointer"}}>
                <span className="signer-color" style={{background:SIGNER_COLORS[i%4]}}/>
                {mode==="serial"&&<span style={{fontWeight:800,color:"var(--muted)",fontSize:13}}>{i+1}</span>}
                <div className="signer-info"><div className="signer-name">{s.name}</div><div className="signer-role">{s.role}</div></div>
                {active===i&&<Check size={16} style={{color:SIGNER_COLORS[i%4]}}/>}
              </div>
            ))}
            <button className="add-line" onClick={addSigner}><UserPlus size={16}/> הוסף חותם</button>

            <div style={{marginTop:18}}>
              <span className="lbl">שליחה באמצעות</span>
              <div style={{display:"flex",gap:7}}>
                <button className={`chan ${chan==="email"?"on":""}`} onClick={()=>setChan("email")}><Mail size={15}/>מייל</button>
                <button className={`chan ${chan==="sms"?"on":""}`} onClick={()=>setChan("sms")}><Smartphone size={15}/>SMS</button>
                <button className={`chan wa ${chan==="whatsapp"?"on":""}`} onClick={()=>setChan("whatsapp")}><MessageCircle size={15}/>וואטסאפ</button>
              </div>
            </div>
            <div style={{marginTop:14,display:"flex",alignItems:"center",gap:10,padding:12,
              background:"var(--accent-soft)",borderRadius:11}}>
              <ShieldCheck size={18} style={{color:"var(--accent)"}}/>
              <span style={{fontSize:13,fontWeight:600,color:"var(--accent-ink)"}}>אימות זהות OTP מופעל</span>
              <div className="toggle on" style={{marginInlineStart:"auto"}}><i/></div>
            </div>
          </div>
        </div>
      </div>

      {/* drag ghost */}
      {drag&&(
        <div className="ghost" style={{left:drag.gx+12,top:drag.gy+12,borderColor:drag.color,color:drag.color}}>
          {React.createElement(ftMeta(drag.type).ic,{size:14})}{drag.label}
        </div>
      )}
    </div>
  );
}

/* ============================================================ Templates */
function Templates({onUse,toast}){
  const [pubs,setPubs]=useState(()=>Object.fromEntries(TEMPLATES.map(t=>[t.id,t.pub])));
  return (
    <div className="fade-up">
      <div className="page-head">
        <div><div className="h1 serif">תבניות</div><div className="page-sub">מסמכים לשימוש חוזר — כולל קישור ציבורי לחתימה עצמית</div></div>
        <button className="btn btn-primary" onClick={onUse}><Plus size={18}/> תבנית חדשה</button>
      </div>
      <div className="tmpl-grid">
        {TEMPLATES.map((t,i)=>(
          <div className="card tmpl fade-up" key={t.id} style={{animationDelay:`${i*50}ms`}}>
            <div className="tmpl-prev">
              <div style={{opacity:.45}}>{[88,70,94,0,80,62].map((w,j)=><div key={j} className="page-ln" style={{width:w?`${w}%`:0,marginBottom:w?12:24}}/>)}</div>
              <div style={{position:"absolute",top:16,left:16,width:44,height:44,borderRadius:12,background:"#fff",
                border:"1px solid var(--line)",display:"grid",placeItems:"center"}}><t.ic size={21} style={{color:"var(--accent)"}}/></div>
            </div>
            <div className="tmpl-body">
              <div style={{fontWeight:800,fontSize:16,marginBottom:3}}>{t.title}</div>
              <div style={{fontSize:13,color:"var(--muted)",marginBottom:14}}>{t.fields} שדות</div>
              <div style={{display:"flex",alignItems:"center",gap:9,padding:"10px 12px",
                background:pubs[t.id]?"var(--accent-soft)":"var(--surface-2)",borderRadius:11,transition:".2s"}}>
                <Globe size={16} style={{color:pubs[t.id]?"var(--accent)":"var(--muted-2)"}}/>
                <span style={{fontSize:13,fontWeight:700,color:pubs[t.id]?"var(--accent-ink)":"var(--muted)"}}>קישור ציבורי</span>
                <div className={`toggle ${pubs[t.id]?"on":""}`} style={{marginInlineStart:"auto"}}
                  onClick={()=>setPubs(p=>({...p,[t.id]:!p[t.id]}))}><i/></div>
              </div>
              <div style={{display:"flex",gap:8,marginTop:11}}>
                <button className="btn btn-dark btn-sm" style={{flex:1,justifyContent:"center"}} onClick={onUse}><PenTool size={15}/> השתמש</button>
                {pubs[t.id]&&<button className="btn btn-ghost btn-sm" title="העתק קישור ציבורי" onClick={()=>toast("הקישור הציבורי הועתק")}><Link2 size={15}/></button>}
                <button className="btn btn-ghost btn-sm" title="שלח בוואטסאפ" onClick={()=>toast("נשלח בוואטסאפ ✓")}><MessageCircle size={15} className="wa"/></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================ Users */
function UsersView({toast}){
  return (
    <div className="fade-up">
      <div className="page-head">
        <div><div className="h1 serif">משתמשים והרשאות</div><div className="page-sub">צוות סביבת העבודה והתפקידים שלהם</div></div>
        <button className="btn btn-primary" onClick={()=>toast("הזמנה נשלחה במייל ✓")}><UserPlus size={18}/> הזמן משתמש</button>
      </div>
      <div className="card" style={{padding:"20px 8px"}}>
        <table className="tbl">
          <thead><tr><th style={{paddingRight:24}}>משתמש</th><th>תפקיד</th><th>הרשאות</th><th>פעילות אחרונה</th><th></th></tr></thead>
          <tbody>
            {USERS.map((u,i)=>(
              <tr key={i}>
                <td style={{paddingRight:24}}>
                  <div className="doc-name"><div className="avatar" style={{width:38,height:38,fontSize:14}}>{u.name[0]}</div>
                    <div><div>{u.name}</div><div style={{fontSize:12.5,color:"var(--muted)",fontWeight:500}}>{u.email}</div></div>
                  </div>
                </td>
                <td>
                  <span className={`role-tag ${u.role==="admin"?"r-admin":u.role==="creator"?"r-creator":"r-viewer"}`}>
                    {u.role==="admin"?"מנהל":u.role==="creator"?"יוצר":"צופה"}
                  </span>
                </td>
                <td style={{color:"var(--muted)",fontSize:13.5}}>
                  {u.role==="admin"?"גישה מלאה + חיוב":u.role==="creator"?"יצירה ושליחת מסמכים":"צפייה בלבד"}
                </td>
                <td style={{color:"var(--muted)"}}>{u.last}</td>
                <td><div className="row-acts"><button className="mini" onClick={()=>toast("ניהול משתמש")}><MoreHorizontal size={17}/></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ============================================================ Settings */
function SettingsView({toast}){
  const [tab,setTab]=useState("brand");
  const [color,setColor]=useState("#0f7a58");
  const colors=["#0f7a58","#2b6cb0","#6b3fa0","#b3392f","#bd9442","#15182b"];
  const [recur,setRecur]=useState(true);const [otp,setOtp]=useState(true);const [seal,setSeal]=useState(true);
  return (
    <div className="fade-up">
      <div className="page-head"><div><div className="h1 serif">הגדרות</div><div className="page-sub">מיתוג, סליקה, אבטחה וסביבת העבודה</div></div></div>
      <div className="set-grid">
        <div className="set-nav">
          {[["brand","מיתוג",Palette],["pay","סליקה ותשלומים",CreditCard],["sec","אבטחה וציות",ShieldCheck],["ws","סביבת עבודה",Building2]].map(([k,l,Ic])=>(
            <button key={k} className={tab===k?"on":""} onClick={()=>setTab(k)} style={{display:"flex",alignItems:"center",gap:10}}>
              <Ic size={17}/> {l}
            </button>
          ))}
        </div>
        <div>
          {tab==="brand"&&(
            <div className="card panel">
              <div className="panel-title" style={{marginBottom:18}}>מיתוג סביבת העבודה</div>
              <span className="lbl">לוגו</span>
              <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:22}}>
                <MarkTile size={60} bg={color} radius={14}/>
                <button className="btn btn-ghost btn-sm" onClick={()=>toast("בחר קובץ לוגו")}>העלאת לוגו</button>
              </div>
              <span className="lbl">צבע מותג ראשי</span>
              <div style={{display:"flex",gap:10,marginBottom:8}}>
                {colors.map(c=><div key={c} className={`swatch ${color===c?"on":""}`} style={{background:c}} onClick={()=>setColor(c)}/>)}
              </div>
              <div style={{marginTop:20,padding:16,borderRadius:12,background:"var(--surface-2)",border:"1px solid var(--line)"}}>
                <div style={{fontSize:12.5,color:"var(--muted)",fontWeight:700,marginBottom:10}}>תצוגה מקדימה</div>
                <button className="btn" style={{background:color,color:"#fff"}}><PenTool size={16}/> חתום עכשיו</button>
              </div>
            </div>
          )}
          {tab==="pay"&&(
            <div className="card panel">
              <div className="panel-title" style={{marginBottom:6}}>שער תשלום</div>
              <div style={{fontSize:13.5,color:"var(--muted)",marginBottom:20}}>חיבור לסליקה ישראלית לגביית תשלום בתוך מסמכים</div>
              <div style={{display:"flex",alignItems:"center",gap:12,padding:14,border:"1.5px solid var(--accent)",
                borderRadius:13,background:"var(--accent-soft)",marginBottom:18}}>
                <div style={{width:42,height:42,borderRadius:10,background:"#fff",display:"grid",placeItems:"center",fontWeight:800,color:"var(--accent)"}}>TZ</div>
                <div><div style={{fontWeight:800}}>Tranzila</div><div style={{fontSize:12.5,color:"var(--accent-ink)"}}>מחובר · טוקניזציה + חיוב חוזר</div></div>
                <BadgeCheck size={20} style={{color:"var(--accent)",marginInlineStart:"auto"}}/>
              </div>
              <div className="card-grid" style={{marginBottom:14}}>
                <div><span className="lbl">Supplier (terminal)</span><input className="inp" value="easy2sign" readOnly/></div>
                <div><span className="lbl">API App Key</span><input className="inp" value="••••••••••3f9a" readOnly/></div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:11,padding:13,borderRadius:11,background:"var(--surface-2)",border:"1px solid var(--line)"}}>
                <CircleDollarSign size={18} style={{color:"var(--gold)"}}/>
                <span style={{fontSize:14,fontWeight:600}}>חיוב חוזר (recurring / J5)</span>
                <div className={`toggle ${recur?"on":""}`} style={{marginInlineStart:"auto"}} onClick={()=>setRecur(!recur)}><i/></div>
              </div>
            </div>
          )}
          {tab==="sec"&&(
            <div className="card panel">
              <div className="panel-title" style={{marginBottom:18}}>אבטחה וציות</div>
              {[
                ["אימות זהות OTP","דרוש קוד SMS/אימייל לפני חתימה",otp,setOtp,Fingerprint],
                ["חותם דיגיטלי (PKI)","נעילת ה-PDF הסופי בתעודה דיגיטלית למניעת עריכה",seal,setSeal,Lock],
              ].map(([t,d,v,set,Ic],i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:13,padding:15,borderRadius:12,
                  background:"var(--surface-2)",border:"1px solid var(--line)",marginBottom:11}}>
                  <div style={{width:40,height:40,borderRadius:10,background:"#fff",border:"1px solid var(--line)",display:"grid",placeItems:"center"}}><Ic size={18} style={{color:"var(--ink-3)"}}/></div>
                  <div style={{flex:1}}><div style={{fontWeight:700}}>{t}</div><div style={{fontSize:12.5,color:"var(--muted)"}}>{d}</div></div>
                  <div className={`toggle ${v?"on":""}`} onClick={()=>set(!v)}><i/></div>
                </div>
              ))}
              <div style={{marginTop:8,padding:14,borderRadius:12,background:"var(--gold-soft)",fontSize:13,color:"var(--ink-3)",fontWeight:600,lineHeight:1.5}}>
                <ShieldCheck size={16} style={{color:"var(--gold)",verticalAlign:"-3px",marginLeft:6}}/>
                כל מסמך מקבל דף Audit Trail עם IP, שעה, דפדפן ואימות OTP — חתום בחותם דיגיטלי בלתי ניתן לעריכה.
              </div>
            </div>
          )}
          {tab==="ws"&&(
            <div className="card panel">
              <div className="panel-title" style={{marginBottom:18}}>סביבת עבודה</div>
              <div style={{marginBottom:14}}><span className="lbl">שם העסק</span><input className="inp" defaultValue="EASY2SIGN"/></div>
              <div style={{marginBottom:14}}><span className="lbl">ח.פ / ע.מ</span><input className="inp" defaultValue="51-XXXXXXX"/></div>
              <div><span className="lbl">שפת ברירת מחדל</span>
                <select className="inp"><option>עברית (RTL)</option><option>English</option><option>العربية</option></select></div>
              <button className="btn btn-primary" style={{marginTop:18}} onClick={()=>toast("השינויים נשמרו ✓")}>שמירת שינויים</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================ SIGNING EXPERIENCE */
function SigningExperience({onClose,onToast,brand="#0f7a58"}){
  const [step,setStep]=useState("otp"); // otp -> fields -> pay -> done
  useEffect(()=>{
    const k=e=>{if(e.key==="Escape")onClose();};
    window.addEventListener("keydown",k);
    return()=>window.removeEventListener("keydown",k);
  },[onClose]);
  const [otp,setOtp]=useState(["","","","","",""]);
  const otpRefs=useRef([]);
  const [text,setText]=useState("");
  const [check,setCheck]=useState(false);
  const [signed,setSigned]=useState(false);
  const [paying,setPaying]=useState(false);
  const canvasRef=useRef(null);
  const drawing=useRef(false);

  // signature pad
  useEffect(()=>{
    if(step!=="fields") return;
    const c=canvasRef.current; if(!c) return;
    const ctx=c.getContext("2d"); const rect=c.getBoundingClientRect();
    c.width=rect.width; c.height=150;
    ctx.strokeStyle=brand; ctx.lineWidth=2.5; ctx.lineCap="round"; ctx.lineJoin="round";
    const pos=e=>{const r=c.getBoundingClientRect();const t=e.touches?.[0]||e;return [t.clientX-r.left,t.clientY-r.top];};
    const down=e=>{drawing.current=true;const[x,y]=pos(e);ctx.beginPath();ctx.moveTo(x,y);setSigned(true);};
    const mv=e=>{if(!drawing.current)return;e.preventDefault();const[x,y]=pos(e);ctx.lineTo(x,y);ctx.stroke();};
    const up=()=>drawing.current=false;
    c.addEventListener("pointerdown",down);c.addEventListener("pointermove",mv);
    window.addEventListener("pointerup",up);
    return()=>{c.removeEventListener("pointerdown",down);c.removeEventListener("pointermove",mv);window.removeEventListener("pointerup",up);};
  },[step,brand]);

  const otpType=(i,v)=>{
    if(!/^\d?$/.test(v))return;
    const n=[...otp];n[i]=v;setOtp(n);
    if(v&&i<5)otpRefs.current[i+1]?.focus();
  };
  const otpDone=otp.every(d=>d!=="");
  const fieldsDone=text.trim()&&check&&signed;

  return (
    <div className="sign-stage">
      <div className="sign-bar">
        <div style={{display:"flex",alignItems:"center",gap:11}}>
          <Wordmark color="#15182b" accent={brand} height={26}/>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:14}}>
          <span className="secure-tag"><Lock size={13}/> חיבור מאובטח · מוצפן</span>
          <button className="btn btn-ghost btn-sm" onClick={onClose}><X size={16}/> יציאה</button>
        </div>
      </div>

      <div className="sign-body">
        {step==="otp"&&(
          <div className="sign-card" style={{textAlign:"center"}}>
            <div className="kpi-ic" style={{width:56,height:56,borderRadius:16,background:"var(--accent-soft)",margin:"0 auto 18px"}}><Smartphone size={26} style={{color:brand}}/></div>
            <div className="h1 serif" style={{fontSize:24}}>אימות זהות</div>
            <p style={{color:"var(--muted)",marginTop:8,lineHeight:1.6}}>שלחנו קוד בן 6 ספרות אל הטלפון<br/>המסתיים ב־<b>•••• 4821</b></p>
            <div className="otp-row">
              {otp.map((d,i)=>(
                <input key={i} ref={el=>otpRefs.current[i]=el} value={d} inputMode="numeric" maxLength={1}
                  onChange={e=>otpType(i,e.target.value)} autoFocus={i===0}/>
              ))}
            </div>
            <button className="btn" disabled={!otpDone}
              style={{width:"100%",justifyContent:"center",background:otpDone?brand:"var(--line-2)",color:"#fff",
                opacity:otpDone?1:.7}}
              onClick={()=>otpDone&&setStep("fields")}><ShieldCheck size={18}/> אמת והמשך</button>
            <button style={{marginTop:14,color:"var(--muted)",fontSize:13.5,fontWeight:600}}>שליחת קוד מחדש</button>
          </div>
        )}

        {step==="fields"&&(
          <div className="sign-doc fade-up">
            <div style={{textAlign:"center",marginBottom:22}}>
              <Pill s="viewed"/>
              <div className="h1 serif" style={{fontSize:24,marginTop:10}}>הסכם שכירות משנה — ארנון 5, ת״א</div>
              <div className="page-sub">מלא את השדות המסומנים וחתום בתחתית</div>
            </div>

            <div className={`field-card ${text.trim()?"done":""}`}>
              <span className="lbl"><Type size={14} style={{verticalAlign:"-2px",marginLeft:5}}/>שם מלא</span>
              <input className="inp" placeholder="הקלד את שמך המלא" value={text} onChange={e=>setText(e.target.value)}/>
            </div>

            <div className={`field-card ${check?"done":""}`} style={{cursor:"pointer"}} onClick={()=>setCheck(!check)}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{width:24,height:24,borderRadius:7,border:`2px solid ${check?brand:"var(--line-2)"}`,
                  background:check?brand:"#fff",display:"grid",placeItems:"center",flexShrink:0,transition:".15s"}}>
                  {check&&<Check size={16} color="#fff"/>}
                </div>
                <span style={{fontWeight:600,fontSize:14.5}}>קראתי ואני מאשר את תנאי ההסכם</span>
              </div>
            </div>

            <div className={`field-card ${signed?"done":""}`}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                <span className="lbl" style={{margin:0}}><PenTool size={14} style={{verticalAlign:"-2px",marginLeft:5}}/>חתימה</span>
                <button style={{fontSize:12.5,color:"var(--muted)",fontWeight:700}}
                  onClick={()=>{const c=canvasRef.current;c.getContext("2d").clearRect(0,0,c.width,c.height);setSigned(false);}}>נקה</button>
              </div>
              <div className="sigpad"><canvas ref={canvasRef}/>{!signed&&<div className="pad-hint">חתום כאן באצבע או בעכבר ✍️</div>}</div>
            </div>

            <button className="btn" disabled={!fieldsDone}
              style={{width:"100%",justifyContent:"center",marginTop:8,padding:15,fontSize:16,
                background:fieldsDone?brand:"var(--line-2)",color:"#fff",opacity:fieldsDone?1:.7}}
              onClick={()=>fieldsDone&&setStep("pay")}>
              <Lock size={18}/> אשר חתימה והמשך לתשלום
            </button>
            <div style={{textAlign:"center",marginTop:14,fontSize:12.5,color:"var(--muted-2)"}}>
              <ShieldCheck size={13} style={{verticalAlign:"-2px",marginLeft:4}}/> החתימה תיחתם דיגיטלית ותינעל מפני עריכה
            </div>
            <div style={{textAlign:"center",marginTop:8}}>
              <button style={{color:"var(--red)",fontSize:13.5,fontWeight:700}}
                onClick={()=>{onToast&&onToast("סירוב לחתימה נרשם",<Ban size={18} style={{color:"#ff8a80"}}/>);onClose();}}>
                סרב לחתום על המסמך
              </button>
            </div>
          </div>
        )}

        {step==="pay"&&(
          <div className="sign-card" style={{maxWidth:430}}>
            <div className="checkout">
              <div className="pay-brand">
                <div><div style={{fontSize:13,color:"var(--muted)",fontWeight:700}}>סכום לתשלום</div>
                  <div className="amount-big">4,800 <span style={{fontSize:22}}>₪</span></div></div>
                <div style={{textAlign:"left"}}><div style={{fontWeight:800,color:"var(--accent)"}}>Tranzila</div>
                  <div style={{fontSize:11.5,color:"var(--muted)"}}>סליקה מאובטחת</div></div>
              </div>
              <div style={{marginBottom:12}}><span className="lbl">מספר כרטיס</span>
                <div style={{position:"relative"}}>
                  <input className="inp" placeholder="0000 0000 0000 0000" defaultValue="4580 1234 5678 9012"/>
                  <CreditCard size={18} style={{position:"absolute",left:13,top:12,color:"var(--muted-2)"}}/>
                </div></div>
              <div className="card-grid" style={{marginBottom:12}}>
                <div><span className="lbl">תוקף</span><input className="inp" placeholder="MM/YY" defaultValue="08/28"/></div>
                <div><span className="lbl">CVV</span><input className="inp" placeholder="123" defaultValue="•••"/></div>
              </div>
              <div style={{marginBottom:16}}><span className="lbl">ת״ז בעל הכרטיס</span><input className="inp" placeholder="9 ספרות" defaultValue="•••••••••"/></div>
              <button className="btn" disabled={paying}
                style={{width:"100%",justifyContent:"center",padding:15,fontSize:16,background:brand,color:"#fff"}}
                onClick={()=>{setPaying(true);setTimeout(()=>setStep("done"),1700);}}>
                {paying?<><span className="spin"/> מעבד תשלום…</>:<><Lock size={18}/> שלם 4,800 ₪</>}
              </button>
              <div style={{textAlign:"center",marginTop:13,fontSize:12,color:"var(--muted-2)",display:"flex",gap:10,justifyContent:"center"}}>
                <span>🔒 PCI-DSS</span><span>·</span><span>3D Secure</span><span>·</span><span>SSL</span>
              </div>
            </div>
          </div>
        )}

        {step==="done"&&(
          <div className="sign-card" style={{textAlign:"center"}}>
            <div className="success-ring"><Check size={44} style={{color:brand}}/></div>
            <div className="h1 serif" style={{fontSize:26}}>הכל הושלם! 🎉</div>
            <p style={{color:"var(--muted)",marginTop:8,lineHeight:1.6}}>המסמך נחתם, התשלום התקבל,<br/>וההסכם ננעל בחותם דיגיטלי.</p>

            <div className="seal" style={{margin:"24px auto"}}>
              <div style={{textAlign:"center"}}><Lock size={26}/><div style={{fontSize:10,fontWeight:800,marginTop:3}}>SEALED</div></div>
            </div>

            <div style={{background:"var(--surface-2)",border:"1px solid var(--line)",borderRadius:13,padding:16,textAlign:"right",margin:"6px 0 18px"}}>
              <div style={{fontSize:12.5,fontWeight:800,color:"var(--muted)",marginBottom:10}}>תיעוד (Audit Trail)</div>
              {[[Fingerprint,"זהות אומתה ב-OTP","היום 14:32"],[MapPin,"IP · 82.166.xx.xx","תל אביב, IL"],[Monitor,"Chrome · macOS",""],[CircleDollarSign,"תשלום 4,800 ₪ אושר","אישור #TZ-90412"]].map(([Ic,a,b],i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:10,fontSize:13,padding:"5px 0"}}>
                  <Ic size={15} style={{color:"var(--accent)"}}/><span style={{fontWeight:600}}>{a}</span>
                  {b&&<span style={{marginInlineStart:"auto",color:"var(--muted)",fontSize:12.5}}>{b}</span>}
                </div>
              ))}
            </div>
            <button className="btn" style={{width:"100%",justifyContent:"center",background:brand,color:"#fff"}} onClick={()=>onToast&&onToast("המסמך החתום הורד (PDF)")}><Download size={18}/> הורד מסמך חתום (PDF)</button>
            <button style={{marginTop:14,color:"var(--muted)",fontSize:13.5,fontWeight:700}} onClick={onClose}>חזרה לפאנל הניהול</button>
          </div>
        )}
      </div>

      <style>{`.spin{width:17px;height:17px;border:2.5px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;display:inline-block;animation:sp .7s linear infinite}@keyframes sp{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

/* ============================================================ Send modal (with WhatsApp) */
function SendModal({onClose,onSent}){
  const [chan,setChan]=useState("whatsapp");
  const [msg,setMsg]=useState("שלום, מצורף מסמך לחתימה דיגיטלית מ-EASY2SIGN. החתימה מאובטחת ואורכת פחות מדקה.");
  const recips=[
    {name:"דנה לוי",contact:"050-123-4821",role:"שוכר"},
    {name:"נתנאל אזולאי",contact:"netanel@easy2sign.co.il",role:"משכיר"},
  ];
  const send=()=>onSent(chan);
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <div className="modal-head">
          <div><div style={{fontWeight:800,fontSize:18}}>שליחה לחתימה</div>
            <div style={{fontSize:13,color:"var(--muted)"}}>בחר ערוץ ושלח לחותמים</div></div>
          <button className="mini" onClick={onClose}><X size={18}/></button>
        </div>
        <div style={{padding:24}}>
          <span className="lbl">ערוץ שליחה</span>
          <div style={{display:"flex",gap:8,marginBottom:18}}>
            <button className={`chan ${chan==="email"?"on":""}`} onClick={()=>setChan("email")}><Mail size={16}/>אימייל</button>
            <button className={`chan ${chan==="sms"?"on":""}`} onClick={()=>setChan("sms")}><Smartphone size={16}/>SMS</button>
            <button className={`chan wa ${chan==="whatsapp"?"on":""}`} onClick={()=>setChan("whatsapp")}><MessageCircle size={16}/>וואטסאפ</button>
          </div>
          <span className="lbl">נמענים</span>
          {recips.map((r,i)=>(
            <div className="sm-signer" key={i}>
              <span className="signer-color" style={{background:SIGNER_COLORS[i%4]}}/>
              <div style={{flex:1,minWidth:0}}><div className="signer-name">{r.name}</div>
                <div className="signer-role">{r.role} · {r.contact}</div></div>
              <Check size={16} style={{color:"var(--accent)"}}/>
            </div>
          ))}
          <div style={{marginTop:6}}><span className="lbl">הודעה מצורפת</span>
            <textarea className="inp" rows={3} value={msg} onChange={e=>setMsg(e.target.value)} style={{resize:"none"}}/></div>
          {chan==="whatsapp"&&(
            <div style={{marginTop:12,display:"flex",alignItems:"center",gap:10,padding:12,borderRadius:11,background:"#e4f6ea"}}>
              <MessageCircle size={18} className="wa"/>
              <span style={{fontSize:13,fontWeight:600,color:"#147a3c"}}>הקישור יישלח בוואטסאפ עם קוד OTP לאימות זהות</span>
            </div>
          )}
          <button className="btn btn-primary" style={{width:"100%",justifyContent:"center",marginTop:18,padding:14}} onClick={send}>
            {chan==="whatsapp"?<><MessageCircle size={18}/> שלח בוואטסאפ</>:chan==="sms"?<><Smartphone size={18}/> שלח ב-SMS</>:<><Send size={18}/> שלח באימייל</>}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================ Login / exit screen */
function Login({onEnter}){
  return (
    <div className="login-stage">
      <div className="login-card">
        <div style={{display:"flex",justifyContent:"center",marginBottom:10}}><Wordmark color="#15182b" accent="#0f7a58" height={42}/></div>
        <div style={{textAlign:"center",color:"var(--muted)",fontSize:14,marginBottom:26}}>התחברות לסביבת העבודה</div>
        <span className="lbl">אימייל</span>
        <input className="inp" defaultValue="netanel@easy2sign.co.il" style={{marginBottom:14}}/>
        <span className="lbl">סיסמה</span>
        <input className="inp" type="password" defaultValue="password" style={{marginBottom:20}}/>
        <button className="btn btn-primary" style={{width:"100%",justifyContent:"center",padding:14}} onClick={onEnter}><Lock size={18}/> כניסה</button>
        <div style={{display:"flex",alignItems:"center",gap:10,margin:"18px 0"}}>
          <div style={{flex:1,height:1,background:"var(--line)"}}/><span style={{fontSize:12,color:"var(--muted-2)"}}>או</span><div style={{flex:1,height:1,background:"var(--line)"}}/>
        </div>
        <button className="btn btn-ghost" style={{width:"100%",justifyContent:"center"}} onClick={onEnter}>המשך עם Google</button>
        <div className="login-foot">EASY2SIGN · חתימה דיגיטלית מאובטחת בישראל</div>
      </div>
    </div>
  );
}

/* ============================================================ APP SHELL */
export default function App(){
  const [view,setView]=useState("dashboard");
  const [signing,setSigning]=useState(false);
  const [loggedIn,setLoggedIn]=useState(true);
  const [profileOpen,setProfileOpen]=useState(false);
  const [notifOpen,setNotifOpen]=useState(false);
  const [sendOpen,setSendOpen]=useState(false);
  const [toasts,setToasts]=useState([]);
  const toast=useCallback((msg,ic)=>{
    const id=Math.random();
    setToasts(t=>[...t,{id,msg,ic}]);
    setTimeout(()=>setToasts(t=>t.filter(x=>x.id!==id)),2600);
  },[]);
  const go=k=>{setView(k);setProfileOpen(false);};

  const nav=[
    ["dashboard","סקירה כללית",LayoutDashboard,null],
    ["documents","מסמכים",FileSignature,"38"],
    ["builder","בנאי מסמכים",PenTool,null],
    ["templates","תבניות",LayoutTemplate,null],
  ];
  const nav2=[["users","משתמשים",Users,null],["settings","הגדרות",Settings,null]];

  const notifs=[
    {ic:Check,bg:"var(--accent-soft)",c:"var(--accent)",t:"דנה לוי חתמה על הסכם שכירות",time:"לפני 12 דקות",unread:true},
    {ic:CircleDollarSign,bg:"var(--gold-soft)",c:"var(--gold)",t:"התקבל תשלום 2,500 ₪",time:"לפני שעה",unread:true},
    {ic:Eye,bg:"var(--blue-soft)",c:"var(--blue)",t:"משה ברק צפה בהצעת מחיר",time:"לפני 3 שעות",unread:false},
  ];

  if(!loggedIn) return (
    <div className="e2s"><style>{CSS}</style><Login onEnter={()=>setLoggedIn(true)}/></div>
  );

  return (
    <div className="e2s">
      <style>{CSS}</style>
      <div className="shell">
        {/* sidebar */}
        <aside className="side">
          <div className="brand">
            <div>
              <Wordmark color="#ffffff" accent="#16a374" height={30}/>
              <div className="brand-sub" style={{marginTop:7}}>SIGN · PAY · DONE</div>
            </div>
          </div>
          <nav className="nav">
            <div className="nav-label">ראשי</div>
            {nav.map(([k,l,Ic,b])=>(
              <button key={k} className={`nav-item ${view===k?"on":""}`} onClick={()=>setView(k)}>
                <Ic size={19}/>{l}{b&&<span className="badge">{b}</span>}
              </button>
            ))}
            <div className="nav-label">ניהול</div>
            {nav2.map(([k,l,Ic])=>(
              <button key={k} className={`nav-item ${view===k?"on":""}`} onClick={()=>setView(k)}>
                <Ic size={19}/>{l}
              </button>
            ))}
            <div style={{marginTop:"auto",padding:"12px",margin:12,borderRadius:14,
              background:"linear-gradient(140deg,rgba(189,148,66,.18),rgba(189,148,66,.06))",border:"1px solid rgba(189,148,66,.25)"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,color:"#e7cf94",fontWeight:800,fontSize:13.5,marginBottom:5}}><Zap size={15}/> תוכנית Pro</div>
              <div style={{fontSize:12,color:"#a7a9c2",lineHeight:1.5,marginBottom:10}}>87 / 200 מסמכים החודש</div>
              <div style={{height:6,borderRadius:6,background:"rgba(255,255,255,.1)"}}><div style={{width:"43%",height:"100%",borderRadius:6,background:"var(--gold)"}}/></div>
            </div>
          </nav>
          <div className="side-foot">
            <div className="ws-card">
              <MarkTile size={34} bg="#bd9442" radius={9}/>
              <div style={{flex:1,minWidth:0}}><div style={{fontWeight:700,fontSize:13.5,color:"#fff"}}>EASY2SIGN בע״מ</div>
                <div style={{fontSize:11.5,color:"#8a8ca6"}}>סביבת עבודה</div></div>
              <ChevronDown size={16} style={{color:"#8a8ca6"}}/>
            </div>
          </div>
        </aside>

        {/* main */}
        <div className="main">
          <header className="top">
            <div className="searchbox"><Search size={17}/><input placeholder="חיפוש מסמכים, חותמים, תבניות…"/></div>
            <div style={{marginInlineStart:"auto",display:"flex",alignItems:"center",gap:12}}>
              <button className="btn btn-primary btn-sm" onClick={()=>setSigning(true)}><Eye size={16}/> תצוגת חתימה</button>

              {/* notifications */}
              <div className="dd-wrap">
                <button className="icon-btn" onClick={()=>{setNotifOpen(o=>!o);setProfileOpen(false);}}><Bell size={19}/><span className="dot"/></button>
                {notifOpen&&<>
                  <div style={{position:"fixed",inset:0,zIndex:55}} onClick={()=>setNotifOpen(false)}/>
                  <div className="dd left" style={{minWidth:320}}>
                    <div className="dd-head"><span style={{fontWeight:800,fontSize:15}}>התראות</span>
                      <button style={{fontSize:12.5,color:"var(--accent)",fontWeight:700}} onClick={()=>{setNotifOpen(false);toast("סומן הכל כנקרא");}}>סמן הכל</button></div>
                    {notifs.map((n,i)=>(
                      <div className="notif" key={i} onClick={()=>{setNotifOpen(false);go("documents");}}>
                        <div className="notif-ic" style={{background:n.bg}}><n.ic size={17} style={{color:n.c}}/></div>
                        <div style={{flex:1}}><div style={{fontSize:13.5,fontWeight:600,lineHeight:1.4}}>{n.t}</div>
                          <div style={{fontSize:12,color:"var(--muted-2)",marginTop:2}}>{n.time}</div></div>
                        {n.unread&&<span className="unread"/>}
                      </div>
                    ))}
                  </div>
                </>}
              </div>

              {/* profile */}
              <div className="dd-wrap">
                <button className="me" onClick={()=>{setProfileOpen(o=>!o);setNotifOpen(false);}}>
                  <span style={{fontWeight:700,fontSize:14}}>נתנאל</span><div className="avatar">נא</div>
                </button>
                {profileOpen&&<>
                  <div style={{position:"fixed",inset:0,zIndex:55}} onClick={()=>setProfileOpen(false)}/>
                  <div className="dd left">
                    <div style={{padding:"10px 12px 12px",display:"flex",alignItems:"center",gap:11,borderBottom:"1px solid var(--line)",marginBottom:6}}>
                      <div className="avatar" style={{width:40,height:40}}>נא</div>
                      <div><div style={{fontWeight:800,fontSize:14.5}}>נתנאל אזולאי</div>
                        <div style={{fontSize:12,color:"var(--muted)"}}>מנהל סביבת עבודה</div></div>
                    </div>
                    <button className="dd-item" onClick={()=>{setProfileOpen(false);toast("פרופיל");}}><UserIcon size={17}/> הפרופיל שלי</button>
                    <button className="dd-item" onClick={()=>go("settings")}><Settings size={17}/> הגדרות</button>
                    <button className="dd-item" onClick={()=>{setProfileOpen(false);toast("מרכז העזרה");}}><HelpCircle size={17}/> עזרה ותמיכה</button>
                    <div className="dd-sep"/>
                    <button className="dd-item danger" onClick={()=>{setProfileOpen(false);setSigning(false);setLoggedIn(false);}}><LogOut size={17}/> התנתקות</button>
                  </div>
                </>}
              </div>
            </div>
          </header>
          <main className="content">
            {view==="dashboard"&&<Dashboard onNew={()=>setView("builder")} onSeeAll={()=>setView("documents")}/>}
            {view==="documents"&&<Documents onOpenSign={()=>setSigning(true)} onBuild={()=>setView("builder")} toast={toast}/>}
            {view==="builder"&&<Builder onSend={()=>setSendOpen(true)} toast={toast}/>}
            {view==="templates"&&<Templates onUse={()=>{setView("builder");toast("התבנית נטענה לבנאי");}} toast={toast}/>}
            {view==="users"&&<UsersView toast={toast}/>}
            {view==="settings"&&<SettingsView toast={toast}/>}
          </main>
        </div>
      </div>

      {sendOpen&&<SendModal onClose={()=>setSendOpen(false)}
        onSent={chan=>{setSendOpen(false);
          toast(chan==="whatsapp"?"נשלח בוואטסאפ ✓":chan==="sms"?"נשלח ב-SMS ✓":"נשלח באימייל ✓");
          setTimeout(()=>setSigning(true),500);}}/>}

      {signing&&<SigningExperience onClose={()=>setSigning(false)} onToast={toast}/>}

      <div className="toast-wrap">
        {toasts.map(t=>(<div className="toast" key={t.id}>{t.ic||<CheckCircle2 size={18} style={{color:"#56d6a0"}}/>}{t.msg}</div>))}
      </div>
    </div>
  );
}
