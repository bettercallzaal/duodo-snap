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
          children: ['info', 'progress', 'buttons'],
        },
        info: {
          type: 'item' as const,
          props: {
            title: 'Duo Do - Road to FarCon Rome',
            description: '$2,183 / $3,000 raised - 47 Executive Producers',
          },
          children: ['badge'],
        },
        badge: {
          type: 'badge' as const,
          props: { label: '73%', color: 'green' as const },
        },
        progress: {
          type: 'progress' as const,
          props: { value: 73, max: 100, label: 'Fundraiser progress' },
        },
        buttons: {
          type: 'stack' as const,
          props: { direction: 'horizontal' as const },
          children: ['support_btn', 'listen_btn', 'share_btn'],
        },
        support_btn: {
          type: 'button' as const,
          props: { label: 'Support', variant: 'primary' as const, icon: 'heart' as const },
          on: {
            press: {
              action: 'open_url' as const,
              params: { target: 'https://farcaster.xyz/miniapps/qdooGiOr3FGt/do-d-at-farcon-rome' },
            },
          },
        },
        listen_btn: {
          type: 'button' as const,
          props: { label: 'Listen', icon: 'music' as const },
          on: {
            press: {
              action: 'open_url' as const,
              params: { target: 'https://tortoise.studio/?id=12f56c82-107b-46f3-93b7-8ba09cd99020' },
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
                text: 'Have you heard of @duodomusica? Performing live at FarCon Rome 2026!',
                embeds: ['https://farcaster.xyz/miniapps/qdooGiOr3FGt/do-d-at-farcon-rome'],
              },
            },
          },
        },
      },
    },
  };
}
