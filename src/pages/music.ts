export function buildMusicPage(baseUrl: string) {
  return {
    version: '1.0' as const,
    theme: { accent: 'purple' as const },
    ui: {
      root: 'page',
      elements: {
        page: {
          type: 'stack' as const,
          props: { direction: 'vertical' as const, gap: 'md' as const },
          children: ['title', 'desc', 'tortoise_item', 'song_item', 'divider', 'perks', 'btn_row_1', 'btn_row_2'],
        },
        title: {
          type: 'text' as const,
          props: { content: 'Duo Do Music', weight: 'bold' as const },
        },
        desc: {
          type: 'text' as const,
          props: { content: 'Creating original music on Tortoise - a new song premiering at FarCon Rome, made in collaboration with the community.', size: 'sm' as const },
        },
        tortoise_item: {
          type: 'item' as const,
          props: { title: 'Listen on Tortoise', description: 'Stream their music and support directly' },
          children: ['tortoise_badge'],
        },
        tortoise_badge: {
          type: 'badge' as const,
          props: { label: 'Music', color: 'green' as const },
        },
        song_item: {
          type: 'item' as const,
          props: { title: 'New Song at FarCon', description: 'Original track premiering live, co-created with Tortoise' },
          children: ['premiere_badge'],
        },
        premiere_badge: {
          type: 'badge' as const,
          props: { label: 'Premiere', color: 'amber' as const },
        },
        divider: {
          type: 'separator' as const,
          props: {},
        },
        perks: {
          type: 'text' as const,
          props: { content: 'Executive Producer Perks: $1+ POAP, $10+ blog credits, $50+ 1/1 NFT', size: 'sm' as const },
        },
        btn_row_1: {
          type: 'stack' as const,
          props: { direction: 'horizontal' as const, gap: 'sm' as const },
          children: ['listen_btn', 'support_btn'],
        },
        btn_row_2: {
          type: 'stack' as const,
          props: { direction: 'horizontal' as const, gap: 'sm' as const },
          children: ['back_btn', 'share_btn'],
        },
        listen_btn: {
          type: 'button' as const,
          props: { label: 'Listen on Tortoise', variant: 'primary' as const, icon: 'music' as const },
          on: {
            press: {
              action: 'open_url' as const,
              params: { target: 'https://tortoise.studio/?id=12f56c82-107b-46f3-93b7-8ba09cd99020' },
            },
          },
        },
        support_btn: {
          type: 'button' as const,
          props: { label: 'Support', icon: 'heart' as const },
          on: {
            press: {
              action: 'open_url' as const,
              params: { target: 'https://farcaster.xyz/miniapps/qdooGiOr3FGt/do-d-at-farcon-rome' },
            },
          },
        },
        back_btn: {
          type: 'button' as const,
          props: { label: 'Back', icon: 'arrow-left' as const },
          on: {
            press: {
              action: 'submit' as const,
              params: { target: `${baseUrl}/` },
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
                text: 'Check out @duodomusica on Tortoise! New original song premiering at FarCon Rome 2026',
                embeds: ['https://tortoise.studio/?id=12f56c82-107b-46f3-93b7-8ba09cd99020', baseUrl],
              },
            },
          },
        },
      },
    },
  };
}
