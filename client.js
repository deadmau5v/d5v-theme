window.__ModuleLoader__.load({
  id: "d5v-theme",
  factory: () => ({
    inject: ["sessions"],
    apply(ctx) {
      ctx.effect(() => {
        const updateHeader = () => {
          const snapshot = ctx.sessions.list.getSnapshot();
          const current = Object.values(snapshot.byId).find(session => (session.retainedBy?.mainView ?? 0) > 0);
          const sessionId = current?.id;
          const parentId = sessionId && ctx.sessions.binding(sessionId)?.session.getSnapshot().subagent?.address?.parentSessionId;
          const team = snapshot.projectionsBySession[parentId ?? sessionId]?.values?.agentTeam;
          const preset = current?.projectionValues?.agentPreset;
          document.body.toggleAttribute("data-d5v-single-lead", Array.isArray(team?.members) && team.members.length === 1 && team.members[0]?.name === "lead");
          document.body.toggleAttribute("data-d5v-standard-preset", preset === "standard");
        };
        const unsubscribe = ctx.sessions.list.subscribe(updateHeader);
        updateHeader();
        return () => {
          unsubscribe();
          document.body.removeAttribute("data-d5v-single-lead");
          document.body.removeAttribute("data-d5v-standard-preset");
        };
      }, "d5v theme: compact session header");

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
            --d5v-overlay-0: #6c7086;
            --d5v-overlay-1: #7f849c;
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
            --dsw-alias-label-deep-diving: var(--d5v-lavender);
            --dsw-alias-label-deep-diving-shimmer: var(--d5v-mauve);
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
            --dsw-alias-scrollbar-bg-l1: var(--d5v-surface-2);
            --dsw-alias-scrollbar-bg-l2: var(--d5v-overlay-0);
            --dsw-alias-scrollbar-hover-l1: var(--d5v-overlay-0);
            --dsw-alias-scrollbar-hover-l2: var(--d5v-overlay-1);

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

          body [data-d5v-hide-preset],
          body[data-d5v-single-lead] [data-team-action] {
            display: none;
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

          html body[data-ds-dark-theme] [data-testid="todo-panel"] {
            --dsw-elevation-stroke-color: var(--dsw-alias-border-l2);
            background: var(--d5v-surface-0);
            backdrop-filter: none;
          }

          html body[data-ds-dark-theme] [data-testid="todo-panel"] button[aria-expanded] {
            border-radius: 5px;
            outline: none;
          }

          html:not([data-input-modality="pointer"]) body[data-ds-dark-theme]
            [data-testid="todo-panel"] button[aria-expanded]:focus-visible {
            outline: 2px solid var(--d5v-lavender);
            outline-offset: 2px;
          }

          body[data-ds-dark-theme] [data-testid="todo-panel"] [data-state="ongoing"] {
            color: var(--d5v-lavender);
          }

          body[data-ds-dark-theme] [data-testid="todo-panel"] [data-state="idle"] {
            color: var(--d5v-overlay-1);
          }

          body[data-ds-dark-theme] [data-composer-card] button[aria-label]:has(> svg > rect[rx="3"]) {
            color: var(--dsw-alias-label-on-color);
          }

          body[data-ds-dark-theme] [data-conversation-region="composer"]
            button[aria-haspopup="dialog"] > svg > circle[stroke-dasharray] {
            stroke: var(--d5v-lavender);
          }

          html body[data-ds-dark-theme] [data-changed-files] {
            --changes-fill: var(--d5v-surface-0);
            --changes-hover: var(--d5v-surface-1);
          }

          html body[data-ds-dark-theme] [data-presented-file] {
            --deliverable-fill: var(--d5v-surface-0);
            --deliverable-hover: var(--d5v-surface-1);
          }

          html body[data-ds-dark-theme] :is(
            [data-changed-files] [class$="_tile"],
            [data-presented-file] [class$="_fileIcon"]
          ) {
            background: color-mix(in srgb, var(--d5v-lavender) 12%, var(--d5v-surface-0));
          }

          /* Local overrides for plugins that paint their own controls. */
          body[data-ds-dark-theme] .dmc-composer-popover {
            background: var(--d5v-surface-0);
          }

          body[data-ds-dark-theme] :is(.dmc-composer-search, .dmc-set-input)::placeholder {
            color: var(--d5v-subtext);
            opacity: 1;
          }

          body[data-ds-dark-theme] .dsh-history-tools-actions {
            background: var(--d5v-surface-0);
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
        const updatePresetLabel = () => {
          const source = document.querySelector('style[data-plugin-css$="/AgentPresetLabel.module.css"]');
          const labelClass = source?.textContent.match(/\.([\w-]+_label)\{/ )?.[1];
          if (!labelClass) return;
          for (const label of document.getElementsByClassName(labelClass)) {
            label.toggleAttribute("data-d5v-hide-preset", document.body.hasAttribute("data-d5v-standard-preset"));
          }
        };
        const observer = new MutationObserver(updatePresetLabel);
        observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["data-d5v-standard-preset"] });
        updatePresetLabel();
        return () => {
          observer.disconnect();
          const source = document.querySelector('style[data-plugin-css$="/AgentPresetLabel.module.css"]');
          const labelClass = source?.textContent.match(/\.([\w-]+_label)\{/ )?.[1];
          if (labelClass) for (const label of document.getElementsByClassName(labelClass)) label.removeAttribute("data-d5v-hide-preset");
          style.remove();
        };
      }, "d5v theme: stylesheet");
    }
  })
});
