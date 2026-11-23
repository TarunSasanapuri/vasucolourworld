/**
 * ============================================================================
 * Vasu Colour World Paints - Paint Quantity & Coverage Chatbot
 * Interactive Paint Calculator Powered by the Official Paint Work Calculation Guide:
 * 
 * Formulas Implemented (from Guide Chart):
 *  1. Area of Openings = (L * H * doors) + (W * H * windows)
 *  2. Net Wall Area    = Gross Wall Area - Area of Openings
 *  3. Paint Qty (Ltrs) = (Paint Area * Coats) / Coverage per Litre
 *  5. Ceiling Area     = Length * Width
 *  8. Wall Area        = Perimeter * Height - (Doors + Windows)
 *  9. Perimeter        = 2 * (Length + Width)
 * 10. Gross Wall Area  = Perimeter * Height
 * 14. Contingencies    = Add 5% - 10% extra for wastage, touch-ups, absorption
 * ============================================================================
 */

(function () {
  let isOpen = false;
  let calculationInputs = {
    lengthFt: 0,
    widthFt: 0,
    heightFt: 0,
    doorsCount: 0,
    doorWidthFt: 0,
    doorHeightFt: 0,
    windowsCount: 0,
    windowWidthFt: 0,
    windowHeightFt: 0,
    includeCeiling: true,
    productId: 'ap-royale-luxury',
    coats: 2,
    contingencyPercent: 10
  };

  const storeInfo = (window.VasuData && window.VasuData.STORE_INFO) || {
    name: 'Vasu Colour World Paints',
    phonePrimary: '+91 94413 56529',
    whatsappNumber: '919441356529'
  };

  function getPaintData() {
    return window.VasuPaintData || null;
  }

  function scrollToBottom() {
    const messages = document.getElementById('chat-messages');
    if (messages) {
      messages.scrollTop = messages.scrollHeight;
    }
  }

  function addMessage(html, sender = 'bot') {
    const messages = document.getElementById('chat-messages');
    if (!messages) return;

    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.innerHTML = html;
    messages.appendChild(msg);
    scrollToBottom();
  }

  function addBotMessage(text) {
    addMessage(`<div class="msg-bubble">${text}</div>`, 'bot');
  }

  function addUserMessage(text) {
    addMessage(`<div class="msg-bubble">${escapeHtml(text)}</div>`, 'user');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Create or get chatbot DOM
  function ensureChatbotDOM() {
    let container = document.getElementById('vasu-chatbot-container');
    if (container) return container;

    container = document.createElement('div');
    container.id = 'vasu-chatbot-container';
    container.className = 'vasu-chatbot-container';

    container.innerHTML = `
      <!-- Floating Launcher Button -->
      <button class="chat-launcher" id="chat-launcher" type="button" aria-label="Open Paint Calculator Chatbot" title="Calculate Paint Quantity & Coverage">
        <div class="launcher-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-chat"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="ic-calc"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
        </div>
        <span class="launcher-label">Paint Calculator Bot</span>
        <span class="launcher-badge">Online</span>
      </button>

      <!-- Chat Window -->
      <div class="chat-window" id="chat-window" role="dialog" aria-label="Paint Coverage & Quantity Calculator Chatbot">
        <!-- Header -->
        <div class="chat-header">
          <div class="chat-header-info">
            <div class="chat-bot-avatar">🎨</div>
            <div>
              <div class="chat-title">Vasu Paint Assistant</div>
              <div class="chat-status"><span class="status-dot"></span> Official Guide Calculator</div>
            </div>
          </div>
          <div class="chat-header-actions">
            <button class="chat-tool-btn" id="chat-reset-btn" type="button" title="Restart calculation" aria-label="Restart calculation">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </button>
            <button class="chat-tool-btn" id="chat-close-btn" type="button" title="Close chat" aria-label="Close chat">
              &times;
            </button>
          </div>
        </div>

        <!-- Messages Feed -->
        <div class="chat-messages" id="chat-messages">
          <!-- Injected dynamically -->
        </div>

        <!-- Quick Action Chips Bar -->
        <div class="chat-quick-chips" id="chat-quick-chips">
          <button type="button" class="chip-btn" data-action="calc">🎨 Estimate Paint Quantity</button>
          <button type="button" class="chip-btn" data-action="contact">📞 Store Contact</button>
        </div>

        <!-- Input Bar -->
        <form class="chat-input-bar" id="chat-form">
          <input type="text" id="chat-input" placeholder="Type room size (e.g. 12x14, 2 doors) or ask..." autocomplete="off">
          <button type="submit" id="chat-send-btn" aria-label="Send message">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </form>
      </div>
    `;

    document.body.appendChild(container);

    // Event Listeners
    const launcher = document.getElementById('chat-launcher');
    const closeBtn = document.getElementById('chat-close-btn');
    const resetBtn = document.getElementById('chat-reset-btn');
    const form = document.getElementById('chat-form');
    const input = document.getElementById('chat-input');
    const chipsContainer = document.getElementById('chat-quick-chips');
    const messages = document.getElementById('chat-messages');

    launcher.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);
    resetBtn.addEventListener('click', () => {
      if (messages) messages.innerHTML = '';
      sendInitialGreeting();
    });

    if (messages) {
      messages.addEventListener('click', (e) => {
        const btn = e.target.closest('.welcome-prompt-btn');
        if (btn) {
          const action = btn.getAttribute('data-action');
          handleChipAction(action);
        }
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      handleUserText(text);
    });

    chipsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip-btn');
      if (!btn) return;
      const action = btn.getAttribute('data-action');
      handleChipAction(action);
    });

    sendInitialGreeting();

    return container;
  }

  function toggleChat() {
    const windowEl = document.getElementById('chat-window');
    const launcher = document.getElementById('chat-launcher');
    if (!windowEl) return;

    isOpen = !isOpen;
    windowEl.classList.toggle('open', isOpen);
    launcher.classList.toggle('active', isOpen);

    if (isOpen) {
      setTimeout(() => {
        const input = document.getElementById('chat-input');
        if (input && window.innerWidth > 768) input.focus();
        scrollToBottom();
      }, 150);
    }
  }

  function sendInitialGreeting() {
    const messages = document.getElementById('chat-messages');
    if (messages && messages.children.length > 0) return;

    addBotMessage(`
      <div class="welcome-chat-msg">
        <p><strong>Namaste! 🙏 Welcome to Vasu Colour World Paints.</strong></p>
        <p>I'm your digital paint assistant. How can I assist you with your painting project today?</p>
        <div class="welcome-action-prompts">
          <button type="button" class="welcome-prompt-btn" data-action="calc">
            <span class="prompt-icon">🎨</span>
            <div class="prompt-text">
              <strong>Estimate Paint Quantity</strong>
              <small>Calculate exact paint cans needed for your room</small>
            </div>
          </button>
          <button type="button" class="welcome-prompt-btn" data-action="contact">
            <span class="prompt-icon">📞</span>
            <div class="prompt-text">
              <strong>Store Contact &amp; Location</strong>
              <small>Pathapatnam / Kalluru, Andhra Pradesh</small>
            </div>
          </button>
        </div>
      </div>
    `);
  }

  // ==========================================================================
  // HELPER: BUILD COMPLETE SERIAL-WISE PRODUCT OPTIONS DROPDOWN
  // ==========================================================================
      function buildProductOptionsHtml(selectedId) {
    const products = (window.VasuData && window.VasuData.STORE_PRODUCTS) || [];
    const groups = {};
    products.forEach(p => {
      const g = p.categoryGroup || `${p.brand || 'Store'} Products`;
      if (!groups[g]) groups[g] = [];
      groups[g].push(p);
    });

    let html = '';
    for (const [groupName, items] of Object.entries(groups)) {
      html += `<optgroup label="${groupName} (${items.length})">
`;
      items.forEach(p => {
        const isSel = (p.id === selectedId) ? 'selected' : '';
        const cov = p.coverage2Coats || p.coverage || '';
        const brandPrefix = (p.brand && !groupName.includes(p.brand)) ? `${p.brand} - ` : '';
        html += `  <option value="${p.id}" ${isSel}>#${p.serial || ''} ${brandPrefix}${p.name} (${cov})</option>
`;
      });
      html += `</optgroup>
`;
    }
    return html;
  }

  // ==========================================================================
  // STEP 1: INTERACTIVE ROOM INPUTS CARD
  // ==========================================================================
  function renderRoomInputsCard(customDefaults = {}) {
    const paintData = getPaintData();
    if (!paintData) return;

    const defaults = Object.assign({}, calculationInputs, customDefaults);
    const dwInit = Number(defaults.doorWidthFt) || 0;
    const dhInit = Number(defaults.doorHeightFt) || 0;
    const wwInit = Number(defaults.windowWidthFt) || 0;
    const whInit = Number(defaults.windowHeightFt) || 0;

    const card = document.createElement('div');
    card.className = 'chat-card formula-input-card';
    card.innerHTML = `
      <div class="card-head-tag">
        <span class="card-icon">📐</span>
        <div>
          <div class="card-title">Room Paint Estimator</div>
          <div class="card-sub">Choose your room dimensions and paint variant:</div>
        </div>
      </div>

      <!-- 1. Room Size (LxWxH) -->
      <div class="form-section-title">
        <span>📏 1. Room Size (Length &times; Width &times; Height)</span>
      </div>
      <div class="form-grid-3">
        <div class="form-field">
          <label for="inp-l">Length (L)</label>
          <div class="inp-unit">
            <input type="number" id="inp-l" value="${defaults.lengthFt !== undefined ? defaults.lengthFt : 0}" min="0" max="100" step="0.5">
            <span>ft</span>
          </div>
        </div>
        <div class="form-field">
          <label for="inp-w">Width (W)</label>
          <div class="inp-unit">
            <input type="number" id="inp-w" value="${defaults.widthFt !== undefined ? defaults.widthFt : 0}" min="0" max="100" step="0.5">
            <span>ft</span>
          </div>
        </div>
        <div class="form-field">
          <label for="inp-h">Height (H)</label>
          <div class="inp-unit">
            <input type="number" id="inp-h" value="${defaults.heightFt !== undefined ? defaults.heightFt : 0}" min="0" max="30" step="0.5">
            <span>ft</span>
          </div>
        </div>
      </div>

      <!-- 2. Doors & Windows (Count along with size) -->
      <div class="form-section-title">
        <span>🚪 2. Doors &amp; Windows (Area of Openings)</span>
      </div>

      <div class="opening-group-row">
        <!-- Doors Card -->
        <div class="opening-card">
          <div class="opening-card-head">
            <span class="opening-title">Doors</span>
            <span class="opening-calc-tag" id="door-calc-tag">${dwInit} &times; ${dhInit} = ${Math.round(dwInit * dhInit * 10) / 10} sq.ft each</span>
          </div>
          <div class="opening-inputs-grid">
            <div class="form-field">
              <label for="inp-doors">No. of Doors</label>
              <div class="stepper-input">
                <button type="button" class="step-btn" data-target="inp-doors" data-step="-1">&minus;</button>
                <input type="number" id="inp-doors" value="${defaults.doorsCount !== undefined ? defaults.doorsCount : 0}" min="0" max="10">
                <button type="button" class="step-btn" data-target="inp-doors" data-step="1">&plus;</button>
              </div>
            </div>
            <div class="form-field">
              <label for="inp-door-w">Width (W)</label>
              <div class="inp-unit">
                <input type="number" id="inp-door-w" value="${dwInit}" min="0" max="20" step="0.5">
                <span>ft</span>
              </div>
            </div>
            <div class="form-field">
              <label for="inp-door-h">Height (H)</label>
              <div class="inp-unit">
                <input type="number" id="inp-door-h" value="${dhInit}" min="0" max="20" step="0.5">
                <span>ft</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Windows Card -->
        <div class="opening-card">
          <div class="opening-card-head">
            <span class="opening-title">Windows</span>
            <span class="opening-calc-tag" id="win-calc-tag">${wwInit} &times; ${whInit} = ${Math.round(wwInit * whInit * 10) / 10} sq.ft each</span>
          </div>
          <div class="opening-inputs-grid">
            <div class="form-field">
              <label for="inp-windows">No. of Windows</label>
              <div class="stepper-input">
                <button type="button" class="step-btn" data-target="inp-windows" data-step="-1">&minus;</button>
                <input type="number" id="inp-windows" value="${defaults.windowsCount !== undefined ? defaults.windowsCount : 0}" min="0" max="10">
                <button type="button" class="step-btn" data-target="inp-windows" data-step="1">&plus;</button>
              </div>
            </div>
            <div class="form-field">
              <label for="inp-win-w">Width (W)</label>
              <div class="inp-unit">
                <input type="number" id="inp-win-w" value="${wwInit}" min="0" max="20" step="0.5">
                <span>ft</span>
              </div>
            </div>
            <div class="form-field">
              <label for="inp-win-h">Height (H)</label>
              <div class="inp-unit">
                <input type="number" id="inp-win-h" value="${whInit}" min="0" max="20" step="0.5">
                <span>ft</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. Ceiling Area Option -->
      <div class="form-toggle-row">
        <label class="checkbox-label" for="inp-ceiling">
          <input type="checkbox" id="inp-ceiling" ${defaults.includeCeiling !== false ? 'checked' : ''}>
          <span>Include Ceiling Area (L &times; W)</span>
        </label>
      </div>

      <!-- 4. Number of Coats -->
      <div class="coats-inline-picker">
        <label>No. of Coats:</label>
        <div class="coat-radios">
          <label><input type="radio" name="inp-coats" value="2" ${defaults.coats === 2 ? 'checked' : ''}> 2 Coats (Recommended)</label>
          <label><input type="radio" name="inp-coats" value="1" ${defaults.coats === 1 ? 'checked' : ''}> 1 Coat</label>
          <label><input type="radio" name="inp-coats" value="3" ${defaults.coats === 3 ? 'checked' : ''}> 3 Coats</label>
        </div>
      </div>

      <!-- 5. Paint Product Variant -->
      <div class="form-section-title">
        <span>🎨 5. Select Paint Product Variant</span>
      </div>
      <div class="variant-select-box">
        <select id="inp-product-select" class="product-dropdown">
          ${buildProductOptionsHtml(defaults.productId)}
        </select>
      </div>

      <!-- Optional Contingency Extra -->
      <div class="form-contingency-box">
        <div class="contingency-title">
          <span>📦 Wastage / Contingency Extra:</span>
        </div>
        <div class="contingency-options">
          <label class="radio-pill">
            <input type="radio" name="cont-radio" value="10" ${defaults.contingencyPercent === 10 ? 'checked' : ''}>
            <span>+10% Extra (Recommended)</span>
          </label>
          <label class="radio-pill">
            <input type="radio" name="cont-radio" value="5" ${defaults.contingencyPercent === 5 ? 'checked' : ''}>
            <span>+5% Extra</span>
          </label>
          <label class="radio-pill">
            <input type="radio" name="cont-radio" value="0" ${defaults.contingencyPercent === 0 ? 'checked' : ''}>
            <span>0% (Exact Formula)</span>
          </label>
        </div>
      </div>

      <!-- Action Button -->
      <button type="button" class="btn calc-execute-btn" id="calc-execute-btn">
        🚀 Calculate Paint Quantity
      </button>
    `;

    // Dynamic door / window area label updates
    function updateOpeningTags() {
      const dw = Number(card.querySelector('#inp-door-w').value) || 0;
      const dh = Number(card.querySelector('#inp-door-h').value) || 0;
      const dTag = card.querySelector('#door-calc-tag');
      if (dTag) dTag.textContent = `${dw} × ${dh} = ${Math.round(dw * dh * 10) / 10} sq.ft each`;

      const ww = Number(card.querySelector('#inp-win-w').value) || 0;
      const wh = Number(card.querySelector('#inp-win-h').value) || 0;
      const wTag = card.querySelector('#win-calc-tag');
      if (wTag) wTag.textContent = `${ww} × ${wh} = ${Math.round(ww * wh * 10) / 10} sq.ft each`;
    }

    card.querySelector('#inp-door-w').addEventListener('input', updateOpeningTags);
    card.querySelector('#inp-door-h').addEventListener('input', updateOpeningTags);
    card.querySelector('#inp-win-w').addEventListener('input', updateOpeningTags);
    card.querySelector('#inp-win-h').addEventListener('input', updateOpeningTags);

    // Stepper buttons for doors & windows
    card.querySelectorAll('.step-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const step = Number(btn.getAttribute('data-step'));
        const inp = card.querySelector(`#${targetId}`);
        if (inp) {
          const newVal = Math.max(0, (Number(inp.value) || 0) + step);
          inp.value = newVal;
        }
      });
    });

    // Submit button
    const executeBtn = card.querySelector('#calc-execute-btn');
    executeBtn.addEventListener('click', () => {
      const lengthFt = Number(card.querySelector('#inp-l').value) || 0;
      const widthFt = Number(card.querySelector('#inp-w').value) || 0;
      const heightFt = Number(card.querySelector('#inp-h').value) || 0;
      const doorsCount = Number(card.querySelector('#inp-doors').value) || 0;
      const doorWidthFt = Number(card.querySelector('#inp-door-w').value) || 0;
      const doorHeightFt = Number(card.querySelector('#inp-door-h').value) || 0;
      const windowsCount = Number(card.querySelector('#inp-windows').value) || 0;
      const windowWidthFt = Number(card.querySelector('#inp-win-w').value) || 0;
      const windowHeightFt = Number(card.querySelector('#inp-win-h').value) || 0;
      const includeCeiling = card.querySelector('#inp-ceiling').checked;
      const contRadio = card.querySelector('input[name="cont-radio"]:checked');
      const contingencyPercent = contRadio ? Number(contRadio.value) : 10;
      const productId = card.querySelector('#inp-product-select').value;
      const coatsRadio = card.querySelector('input[name="inp-coats"]:checked');
      const coats = coatsRadio ? Number(coatsRadio.value) : 2;

      if (lengthFt <= 0 || widthFt <= 0 || heightFt <= 0) {
        addBotMessage("⚠️ Please enter room dimensions greater than 0 (Length, Width, and Height) to calculate paint quantity.");
        return;
      }

      // Update global inputs
      calculationInputs = {
        lengthFt,
        widthFt,
        heightFt,
        doorsCount,
        doorWidthFt,
        doorHeightFt,
        windowsCount,
        windowWidthFt,
        windowHeightFt,
        includeCeiling,
        productId,
        coats,
        contingencyPercent
      };

      addUserMessage(
        `Calculate for Room: ${lengthFt}×${widthFt}×${heightFt} ft, ` +
        `${doorsCount} Doors (${doorWidthFt}×${doorHeightFt} ft), ` +
        `${windowsCount} Windows (${windowWidthFt}×${windowHeightFt} ft), ` +
        `Coats: ${coats}, Ceiling: ${includeCeiling ? 'Yes' : 'No'}.`
      );

      performAndDisplayRoomCalculation(calculationInputs);
    });

    const messages = document.getElementById('chat-messages');
    if (messages) {
      messages.appendChild(card);
      scrollToBottom();
    }
  }

  // ==========================================================================
  // STEP 2: CALCULATE & DISPLAY FORMULA BREAKDOWN
  // ==========================================================================
  function performAndDisplayRoomCalculation(params) {
    const paintData = getPaintData();
    if (!paintData) return;

    const res = paintData.calculateRoomPaint(params);
    if (!res) {
      addBotMessage("Unable to calculate with provided inputs. Please try again.");
      return;
    }

    const { inputs, steps, product } = res;
    const isPutty = product.unit === 'Kg';

    // WhatsApp Message prefilled
    const defaultWhatsApp = storeInfo.whatsappNumber || "919441356529";
    const waText = encodeURIComponent(
      `Hello Vasu Colour World, I would like to inquire about paint requirement from your website:
` +
      `• Room Size: ${inputs.L} x ${inputs.W} x ${inputs.H} ft
` +
      `• Doors: ${inputs.dCount} (${inputs.dWidth}x${inputs.dHeight} ft)
` +
      `• Windows: ${inputs.wCount} (${inputs.wWidth}x${inputs.wHeight} ft)
` +
      `• Wall Area: ${steps.netWallArea} sq.ft (~${res.wallQty} ${product.unit} for ${inputs.numCoats} coats)
` +
      (inputs.isCeiling ? `• Ceiling Area: ${steps.ceilingArea} sq.ft (~${res.ceilingQty} ${product.unit})
` : '') +
      `• Total Paint Area: ${steps.totalPaintArea} sq.ft
` +
      `• Selected Product: ${product.name} (${product.brand})
` +
      `• Total Paint Needed: ${res.totalRequiredQty} ${product.unit}
` +
      `Please let me know the price and availability.`
    );
    const waUrl = `https://wa.me/${defaultWhatsApp}?text=${waText}`;

    // Cans Breakdown Badge HTML (supporting standard packs, 500ml, and 200ml)
    const packHtml = res.packs.map(pk => {
      const sizeLabel = (pk.size === 0.2) ? '200 ml' : (pk.size === 0.5 ? '500 ml' : `${pk.size} ${pk.unit}`);
      const container = isPutty ? 'bag' : 'can';
      return `
        <span class="pack-badge">
          <strong>${pk.count}</strong> &times; ${sizeLabel} ${container}${pk.count > 1 ? 's' : ''}
        </span>
      `;
    }).join(' + ');

    const card = document.createElement('div');
    card.className = 'chat-result-card formula-result-card';

    card.innerHTML = `
      <div class="res-head">
        <span class="res-guide-tag">📋 Paint Requirement Estimation</span>
        <h3 class="res-name">${product.name}</h3>
        <span class="res-type">${product.brand} &middot; ${product.type} (${product.segment})</span>
      </div>

      <!-- Main Quantity Highlight -->
      <div class="res-main-metric">
        <div class="res-big-qty">${res.totalRequiredQty} <span class="res-unit">${product.unit}</span></div>
        <div class="res-sub">Total Paint Required (${inputs.numCoats} Coats on ${steps.totalPaintArea} Sq. Ft.)</div>
        
        <!-- Wall & Ceiling Separate Approx Liter Breakdown -->
        <div class="res-split-metrics">
          <div class="metric-pill">
            <span class="metric-pill-label">🧱 Walls Paint</span>
            <span class="metric-pill-val">~${res.wallQty} ${product.unit}</span>
            <span class="metric-pill-sub">${steps.netWallArea} sq. ft. net walls</span>
          </div>
          ${inputs.isCeiling ? `
          <div class="metric-pill">
            <span class="metric-pill-label">🏠 Ceiling Paint</span>
            <span class="metric-pill-val">~${res.ceilingQty} ${product.unit}</span>
            <span class="metric-pill-sub">${steps.ceilingArea} sq. ft. ceiling</span>
          </div>
          ` : `
          <div class="metric-pill">
            <span class="metric-pill-label">🏠 Ceiling</span>
            <span class="metric-pill-val">Excluded</span>
            <span class="metric-pill-sub">Walls only</span>
          </div>
          `}
        </div>
      </div>

      <!-- Packing Recommendation -->
      <div class="res-details-grid">
        <div class="detail-row">
          <span class="d-label">Recommended Pack Sizes:</span>
          <div class="d-val packs">${packHtml}</div>
        </div>
        <div class="detail-row">
          <span class="d-label">Product Coverage:</span>
          <span class="d-val">${res.coverageRange}</span>
        </div>
        ${res.primer ? `
        <div class="detail-row">
          <span class="d-label">Undercoat (Primer):</span>
          <span class="d-val"><strong>${res.primer.qty} ${res.primer.unit}</strong> (${res.primer.name})</span>
        </div>
        ` : ''}
        ${res.putty ? `
        <div class="detail-row">
          <span class="d-label">Undercoat (Putty):</span>
          <span class="d-val"><strong>${res.putty.qty} ${res.putty.unit}</strong> (${res.putty.name})</span>
        </div>
        ` : ''}
      </div>

      <!-- Action Buttons -->
      <div class="res-actions">
        <a href="${waUrl}" target="_blank" rel="noopener" class="btn res-wa-btn">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 6.99c0 5.45-4.44 9.88-9.88 9.88z"/></svg>
          Ask Price on WhatsApp
        </a>
        <button type="button" class="btn res-recalc-btn" id="recalc-btn">
          ✏️ Change Inputs / Recalculate
        </button>
      </div>
    `;

    // Recalculate button returns back to input form
    const recalcBtn = card.querySelector('#recalc-btn');
    if (recalcBtn) {
      recalcBtn.addEventListener('click', () => {
        addBotMessage("Update your room dimensions below to recalculate:");
        renderRoomInputsCard(inputs);
      });
    }

    const messages = document.getElementById('chat-messages');
    if (messages) {
      messages.appendChild(card);
      scrollToBottom();
    }
  }

  // Handle Freeform User Text Queries
  function handleUserText(query) {
    addUserMessage(query);
    const q = query.toLowerCase();

    // Check for room dimensions pattern like "12x14", "12 by 14", "10*12"
    const dimMatch = q.match(/(\d{1,3})\s*(?:x|by|\*)\s*(\d{1,3})(?:\s*(?:x|by|\*)\s*(\d{1,3}))?/i);
    if (dimMatch) {
      const l = parseInt(dimMatch[1], 10);
      const w = parseInt(dimMatch[2], 10);
      const h = dimMatch[3] ? parseInt(dimMatch[3], 10) : 10;

      // Check doors & windows
      const doorsMatch = q.match(/(\d+)\s*door/i);
      const winMatch = q.match(/(\d+)\s*win/i);
      const d = doorsMatch ? parseInt(doorsMatch[1], 10) : 2;
      const win = winMatch ? parseInt(winMatch[1], 10) : 2;

      addBotMessage(`I detected room size: <strong>${l} &times; ${w} ft</strong> (Height: ${h} ft, ${d} Doors, ${win} Windows). Confirm your inputs and select your paint:`);
      renderRoomInputsCard({
        lengthFt: l,
        widthFt: w,
        heightFt: h,
        doorsCount: d,
        windowsCount: win
      });
      return;
    }

    if (q.includes('formula') || q.includes('guide') || q.includes('how to calculate')) {
      addBotMessage(`
        We calculate paint requirements tailored specifically to your room dimensions, doors, windows, and paint variant.
        <br><br>
        Please enter your room details below to get an accurate estimation:
      `);
      renderRoomInputsCard();
      return;
    }

    if (q.includes('coverage') || q.includes('estimation') || q.includes('calculate') || q.includes('quantity') || q.includes('paint') || q.includes('how much') || q.includes('estimate') || q.includes('litres') || q.includes('liter')) {
      addBotMessage("Please enter your room dimensions, doors, windows, and preferred paint variant below to estimate the required paint quantity:");
      renderRoomInputsCard();
      return;
    }

    if (q.includes('asian') || q.includes('ap')) {
      addBotMessage("Select an Asian Paints variant to calculate:");
      renderRoomInputsCard({ productId: 'ap-royale-luxury' });
      return;
    }

    if (q.includes('nerolac') || q.includes('kansai')) {
      addBotMessage("Select a Kansai Nerolac variant to calculate:");
      renderRoomInputsCard({ productId: 'kn-beauty-gold-washable' });
      return;
    }

    if (q.includes('putty')) {
      addBotMessage("Calculating Wall Putty requirement:");
      renderRoomInputsCard({ productId: 'ap-trucare-wall-putty' });
      return;
    }

    if (q.includes('store') || q.includes('address') || q.includes('timing') || q.includes('phone') || q.includes('contact')) {
      addBotMessage(`
        <strong>Vasu Colour World Paints</strong><br>
        📍 Main Road, beside Shanti Medical Store, Pathapatnam, Srikakulam Dist, AP 532213<br>
        📞 Phone: <a href="tel:+919441356529" style="color:var(--p);font-weight:700">9441356529</a> / <a href="tel:+917330679280" style="color:var(--p);font-weight:700">7330679280</a><br>
        💬 WhatsApp: <a href="https://wa.me/919441356529" target="_blank" style="color:#25d366;font-weight:700">Chat on WhatsApp</a>
      `);
      return;
    }

    if (q.includes('painter') || q.includes('contractor')) {
      addBotMessage(`
        We have verified local painters available in our store network!
        <br><br>
        <button type="button" class="action-btn" onclick="document.querySelector('#painters').scrollIntoView({behavior:'smooth'})">
          View Recommended Painters List &rarr;
        </button>
      `);
      return;
    }

    // Default friendly guidance with the calculator form
    addBotMessage(`
      Please provide your room dimensions below to estimate the required paint quantity:
    `);
    renderRoomInputsCard();
  }

  function handleChipAction(action) {
    if (action === 'calc') {
      addBotMessage("Please enter your room dimensions, doors, windows, and paint variant below to estimate paint quantity:");
      renderRoomInputsCard();
    } else if (action === 'asian') {
      addUserMessage("Asian Paints Products");
      addBotMessage("Choose your room dimensions to estimate for Asian Paints:");
      renderRoomInputsCard({ productId: 'ap-royale-luxury' });
    } else if (action === 'nerolac') {
      addUserMessage("Kansai Nerolac Products");
      addBotMessage("Choose your room dimensions to estimate for Kansai Nerolac:");
      renderRoomInputsCard({ productId: 'kn-beauty-gold-washable' });
    } else if (action === 'contact') {
      handleUserText("store contact");
    }
  }

  // Auto-init
  function initChatbot() {
    ensureChatbotDOM();
  }

  function openWithProduct(productId) {
    if (!isOpen) toggleChat();
    addBotMessage("Calculating for selected paint product:");
    renderRoomInputsCard({ productId: productId });
  }

  window.VasuChatbot = {
    init: initChatbot,
    toggle: toggleChat,
    open: () => { if (!isOpen) toggleChat(); },
    close: () => { if (isOpen) toggleChat(); },
    openWithProduct: openWithProduct,
    calculateRoom: performAndDisplayRoomCalculation
  };
})();
