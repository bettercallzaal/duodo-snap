export function buildHomePage(baseUrl: string) {
  return {
    version: '1.0' as const,
    theme: { accent: 'purple' as const },
    ui: {
      root: 'page',
      elements: {
        page: {
          type: 'stack' as const,
          props: { direction: 'vertical' as const, gap: 'md' as const },
          children: ['title', 'subtitle', 'desc', 'divider', 'farcon_item', 'fundraiser', 'btn_row_1', 'btn_row_2'],
        },
        title: {
          type: 'text' as const,
          props: { content: 'Have You Heard of Duo Do?', weight: 'bold' as const },
        },
        subtitle: {
          type: 'text' as const,
          props: { content: 'A music duo performing live at FarCon Rome 2026', size: 'sm' as const },
        },
        desc: {
          type: 'text' as const,
          props: { content: 'From Buenos Aires to Rome - Duo Do is creating original music on Farcaster with Tortoise. Become an Executive Producer and support their journey.', size: 'sm' as const },
        },
        divider: {
          type: 'separator' as const,
          props: {},
        },
        farcon_item: {
          type: 'item' as const,
          props: { title: 'Road to FarCon Rome', description: 'Resident artists at Kismet Casa, performing live on stage' },
          children: ['live_badge'],
        },
        live_badge: {
          type: 'badge' as const,
          props: { label: 'FarCon 2026', color: 'purple' as const },
        },
        fundraiser: {
          type: 'item' as const,
          props: { title: '$2,183 / $3,000 raised', description: '47 Executive Producers supporting the journey' },
          children: ['fund_badge'],
        },
        fund_badge: {
          type: 'badge' as const,
          props: { label: '73% funded', color: 'green' as const },
        },
        btn_row_1: {
          type: 'stack' as const,
          props: { direction: 'horizontal' as const, gap: 'sm' as const },
          children: ['support_btn', 'music_btn'],
        },
        btn_row_2: {
          type: 'stack' as const,
          props: { direction: 'horizontal' as const, gap: 'sm' as const },
          children: ['profile_btn', 'share_btn'],
        },
        support_btn: {
          type: 'button' as const,
          props: { label: 'Become a Producer', variant: 'primary' as const, icon: 'heart' as const },
          on: {
            press: {
              action: 'open_mini_app' as const,
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
        profile_btn: {
          type: 'button' as const,
          props: { label: 'Duo Do', icon: 'user' as const },
          on: {
            press: {
              action: 'view_profile' as const,
              params: { fid: 873941 },
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
                text: 'Have you heard of @duodomusica? A music duo performing live at FarCon Rome 2026. Become an Executive Producer and support their journey!',
                embeds: [baseUrl, 'https://farcaster.xyz/miniapps/qdooGiOr3FGt/do-d-at-farcon-rome'],
              },
            },
          },
        },
      },
    },
  };
}
