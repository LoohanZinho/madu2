
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'doce-imperio',
    title: 'Campanha de Natal',
    client: 'Doce Império',
    category: 'Estratégia & Social Media',
    description: 'Transformação visual e estratégica para a campanha sazonal de Natal, focando em antecipação e desejo através de narrativa visual.',
    mainImage: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&q=80&w=800'
    ],
    results: [
      'Aumento de 40% no engajamento orgânico',
      'Crescimento de pedidos via Direct no período festivo',
      'Padronização da identidade visual da marca'
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=600',
      after: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600'
    }
  },
  {
    id: 'docuras-da-talice',
    title: 'Identidade Visual & Branding',
    client: 'Doçuras da Talice',
    category: 'Design Gráfico',
    description: 'Desenvolvimento completo de identidade visual, incluindo logotipo, paleta de cores e padrões gráficos para uma confeitaria artesanal.',
    mainImage: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80&w=800'
    ],
    results: [
      'Posicionamento premium no mercado local',
      'Material de embalagem unificado',
      'Consistência em todos os pontos de contato'
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    title: 'Direção de Arte',
    description: 'Criação de narrativas visuais que conectam o produto ao consumidor.',
    imageUrl: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Food Photography',
    description: 'Produção visual focada em despertar o apetite e valorizar ingredientes.',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Estratégia de Conteúdo',
    description: 'Planejamento voltado para conversão e crescimento de autoridade.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600'
  }
];
