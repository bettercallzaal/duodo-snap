export function buildHomePage(baseUrl: string) {
  return {
    version: '1.0' as const,
    theme: { accent: 'purple' as const },
    ui: {
      root: 'page',
      elements: {
        page: {
          type: 'stack' as const,
          props: { direction: 'vertical' as const, gap: 'sm' as const },
          children: ['title', 'farcon_item', 'fundraiser', 'fund_progress', 'btn_row_1', 'btn_row_2'],
        },
        title: {
          type: 'text' as const,
          props: { content: 'Have You Heard of Duo Do?', weight: 'bold' as const },
        },
        farcon_item: {
          type: 'item' as const,
          props: { title: 'Road to FarCon Rome', description: 'Buenos Aires to Rome - live at Kismet Casa' },
          children: ['live_badge'],
        },
        live_badge: {
          type: 'badge' as const,
          props: { label: 'FarCon 2026', color: 'purple' as const },
        },
        fundraiser: {
          type: 'item' as const,
          props: { title: '$2,183 / $3,000 raised', description: '47 Executive Producers' },
          children: ['fund_badge'],
        },
        fund_badge: {
          type: 'badge' as const,
          props: { label: '73%', color: 'green' as const },
        },
        fund_progress: {
          type: 'progress' as const,
          props: { value: 2183, max: 3000, label: '$2,183 of $3,000' },
        },
        btn_row_1: {
          type: 'stack' as const,
          props: { direction: 'horizontal' as const, gap: 'sm' as const },
          children: ['support_btn', 'music_btn', 'share_btn'],
        },
        btn_row_2: {
          type: 'stack' as const,
          props: { direction: 'horizontal' as const, gap: 'sm' as const },
          children: ['duodo_btn', 'santiago_btn'],
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
        music_btn: {
          type: 'button' as const,
          props: { label: 'Listen', icon: 'music' as const },
          on: {
            press: {
              action: 'submit' as const,
              params: { target: `${baseUrl}/music` },
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
                text: 'Have you heard of @duodomusica? Performing live at FarCon Rome 2026. Become an Executive Producer!',
                embeds: [baseUrl, 'https://farcaster.xyz/miniapps/qdooGiOr3FGt/do-d-at-farcon-rome'],
              },
            },
          },
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
      },
    },
  };
}
