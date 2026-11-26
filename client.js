window.__ModuleLoader__.load({
  id: "d5v-theme",
  factory: () => ({
    apply(ctx) {
      ctx.effect(() => {
        const style = document.createElement("style");
        style.dataset.d5vTheme = "";
        style.textContent = `
          html body[data-ds-dark-theme] {
            /* Mocha palette roles. Keep surface and foreground values together. */
            --d5v-crust: #11111b;
            --d5v-mantle: #181825;
            --d5v-base: #1e1e2e;
            --d5v-input: #28283b;
            --d5v-surface-0: #313244;
            --d5v-surface-1: #45475a;
            --d5v-surface-2: #585b70;
            --d5v-overlay: #9399b2;
            --d5v-subtext: #a6adc8;
            --d5v-text: #cdd6f4;
            --d5v-lavender: #b4befe;
            --d5v-mauve: #cba6f7;
            --d5v-green: #a6e3a1;
            --d5v-yellow: #f9e2af;
            --d5v-red: #f38ba8;

            --dsw-alias-bg-base: var(--d5v-base);
            --dsw-alias-bg-layer-1: var(--d5v-input);
            --dsw-alias-bg-layer-2: var(--d5v-surface-0);
            --dsw-alias-bg-layer-3: var(--d5v-surface-1);
            --dsw-alias-bg-overlay: var(--d5v-surface-2);
            --dsw-alias-bg-module-platform: var(--d5v-surface-0);
            --dsw-alias-bg-document-preview: var(--d5v-mantle);
            --dsw-alias-border-l1: #cdd6f413;
            --dsw-alias-border-l2: #cdd6f426;
            --dsw-alias-border-l3: #cdd6f433;
            --dsw-alias-border-l4: #cdd6f448;

            --dsw-alias-label-primary: var(--d5v-text);
            --dsw-alias-label-primary-bluish: var(--d5v-text);
            --dsw-alias-label-primary-dimmed: var(--d5v-text);
            --dsw-alias-label-primary-foreground: var(--d5v-crust);
            --dsw-alias-label-secondary: var(--d5v-subtext);
            --dsw-alias-label-tertiary: var(--d5v-overlay);
            --dsw-alias-label-caption: var(--d5v-overlay);
            --dsw-alias-label-on-color: var(--d5v-crust);
            --dsw-alias-brand-primary: var(--d5v-text);
            --dsw-alias-brand-text: var(--d5v-text);
            --dsw-alias-link: var(--d5v-lavender);
            --dsw-alias-state-business-primary: var(--d5v-lavender);
            --dsw-alias-state-business-tertiary: #3c3b59;
            --dsw-alias-state-done-primary: var(--d5v-mauve);
            --dsw-alias-state-success-primary: var(--d5v-green);
            --dsw-alias-state-warn-primary: var(--d5v-yellow);
            --dsw-alias-state-error-primary: var(--d5v-red);
            --dsw-alias-button-info-fill: var(--d5v-lavender);
            --dsw-alias-button-info-hover: var(--d5v-mauve);
            --dsw-alias-button-primary-hover: var(--d5v-lavender);
            --dsw-alias-button-primary-dimmed: var(--d5v-surface-1);
            --dsw-alias-button-elevated-fill: var(--d5v-surface-0);
            --dsw-alias-button-floating-fill: var(--d5v-input);
            --dsw-alias-button-floating-hover: var(--d5v-surface-0);
            --dsw-alias-interactive-bg-hover: #b4befe15;
            --dsw-alias-interactive-bg-active: #b4befe26;
            --dsw-alias-interactive-bg-hover-solid: var(--d5v-surface-0);
            --dsw-alias-border-selected: var(--d5v-lavender);
            --dsw-alias-markdown-code-block: var(--d5v-mantle);
            --dsw-alias-markdown-code-block-banner: var(--d5v-input);
            --dsw-alias-markdown-inline-code: var(--d5v-surface-0);
            --dsw-alias-menu-group-header-fill: #313244f5;
            --dsw-menu-surface-fill: #313244f2;

            --dsw-specific-input-major: var(--d5v-input);
            --dsw-specific-bubble: var(--d5v-input);
            --dsw-specific-bubble-highlight: var(--d5v-surface-1);
            --dsw-specific-sidebar-fill: var(--d5v-mantle);
            --dsw-specific-sidebar-nav-item-hover: var(--d5v-input);
            --dsw-specific-sidebar-nav-item-active: var(--d5v-surface-0);
            --dsw-specific-sidebar-nav-item-active-accent: var(--d5v-surface-0);
            --dsw-specific-selector: var(--d5v-surface-0);
            --dsw-specific-tip: var(--d5v-surface-0);
          }

          /* Locate the frame and center by the right pane's DSH slot marker. */
          body div:has(> [data-rightbar-col] + [data-shell-bottom]) {
            --d5v-content-radius: 20px;
            background: var(--dsw-specific-sidebar-fill);
          }

          body[data-ds-dark-theme] div:has(> [data-rightbar-col] + [data-shell-bottom]) {
            --d5v-frame-seam: #cdd6f425;
          }

          html[data-platform="darwin"] body[data-ds-dark-theme]
            div:has(> [data-rightbar-col] + [data-shell-bottom])
            > div:first-child {
            background: var(--dsw-specific-sidebar-fill);
          }

          html[data-platform="darwin"] body[data-ds-dark-theme]
            div:has(> [data-rightbar-col] + [data-shell-bottom]):not([data-sidebar-collapsed])
            > div:first-child button[class$="_newSession"] {
            background: var(--dsw-alias-button-elevated-fill);
          }

          html[data-platform="darwin"] body[data-ds-dark-theme]
            div:has(> [data-rightbar-col] + [data-shell-bottom]):not([data-sidebar-collapsed])
            > div:first-child button[class$="_newSession"]:hover {
            background: var(--d5v-surface-1);
          }

          html body[data-ds-dark-theme] [data-composer-card] {
            --dsw-elevation-stroke-color: #cdd6f433;
          }

          /* Local overrides for plugins that paint their own controls. */
          body[data-ds-dark-theme] .dmc-composer-popover {
            background: var(--d5v-surface-0);
          }

          body[data-ds-dark-theme] :is(.dmc-composer-search, .dmc-set-input)::placeholder {
            color: var(--d5v-subtext);
            opacity: 1;
          }

          body[data-ds-dark-theme] .dsh-history-tools-dialog footer button[data-primary] {
            color: var(--dsw-alias-label-on-color);
          }

          body div:has(> [data-rightbar-col] + [data-shell-bottom])
            > div:has(+ [data-rightbar-col]) {
            background: var(--dsw-alias-bg-base);
          }

          body div:has(> [data-rightbar-col] + [data-shell-bottom]):not([data-sidebar-collapsed], [data-rightbar-fullscreen])
            > div:has(+ [data-rightbar-col]) {
            border-radius: var(--d5v-content-radius) 0 0 var(--d5v-content-radius);
            border-left: 1px solid var(--d5v-frame-seam, var(--dsw-alias-border-l3));
          }
        `;
        document.head.append(style);
        return () => style.remove();
      }, "d5v theme: stylesheet");
    }
  })
});
