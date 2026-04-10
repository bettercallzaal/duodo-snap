export function buildHomePage(baseUrl: string) {
  return {
    version: '1.0' as const,
    theme: { accent: 'purple' as const },
    ui: {
      root: 'page',
      elements: {
        page: {
          type: 'stack' as const,
          props: {},
          children: ['info', 'artists', 'progress', 'event_info', 'buttons', 'nav_row'],
        },
        info: {
          type: 'item' as const,
          props: {
            title: 'Duo Do at FarCon Rome',
            description: '$3,000 / $3,000 raised - Goal reached!',
          },
          children: ['badge'],
        },
        badge: {
          type: 'badge' as const,
          props: { label: '100%', color: 'green' as const },
        },
        artists: {
          type: 'stack' as const,
          props: { direction: 'horizontal' as const, gap: 'sm' as const },
          children: ['duodo_btn', 'santiago_btn'],
        },
        duodo_btn: {
          type: 'button' as const,
          props: { label: '@duodomusica', icon: 'user' as const },
          on: {
            press: {
              action: 'view_profile' as const,
              params: { fid: 355566 },
            },
          },
        },
        santiago_btn: {
          type: 'button' as const,
          props: { label: '@estudioborges', icon: 'user' as const },
          on: {
            press: {
              action: 'open_url' as const,
              params: { target: 'https://farcaster.xyz/estudioborges' },
            },
          },
        },
        progress: {
          type: 'progress' as const,
          props: { value: 100, max: 100, label: 'Goal reached!' },
        },
        event_info: {
          type: 'item' as const,
          props: {
            title: 'Live at FarCon Rome 2026',
            description: 'Original music premiering on stage - support the journey',
          },
          children: ['event_badge'],
        },
        event_badge: {
          type: 'badge' as const,
          props: { label: 'FarCon', color: 'purple' as const },
        },
        buttons: {
          type: 'stack' as const,
          props: { direction: 'horizontal' as const },
          children: ['support_btn', 'listen_btn', 'share_btn'],
        },
        nav_row: {
          type: 'stack' as const,
          props: { direction: 'horizontal' as const },
          children: ['music_btn'],
        },
        music_btn: {
          type: 'button' as const,
          props: { label: 'Music', icon: 'music' as const },
          on: {
            press: {
              action: 'submit' as const,
              params: { target: `${baseUrl}/music` },
            },
          },
        },
        support_btn: {
          type: 'button' as const,
          props: { label: 'Support', variant: 'primary' as const, icon: 'heart' as const },
          on: {
            press: {
              action: 'open_mini_app' as const,
              params: { target: 'https://farcaster.xyz/miniapps/qdooGiOr3FGt/do-d-at-farcon-rome' },
            },
          },
        },
        listen_btn: {
          type: 'button' as const,
          props: { label: 'Listen', icon: 'music' as const },
          on: {
            press: {
              action: 'open_mini_app' as const,
              params: { target: 'https://farcaster.xyz/miniapps/Pzx-twnnCA17/tortoise' },
            },
          },
        },
        share_btn: {
          type: 'button' as const,
          props: { label: 'Share', icon: 'share' as const },
          on: {
            press: {
              action: 'compose_cast' as const,
              params: {
                text: 'Have you heard of @duodomusica and @estudioborges? Performing live at FarCon Rome 2026! Support their journey',
                embeds: ['https://farcaster.xyz/miniapps/qdooGiOr3FGt/do-d-at-farcon-rome'],
              },
            },
          },
        },
      },
    },
  };
}
