import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  Flame,
  Heart,
  Leaf,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  ThumbsUp,
  Utensils,
  Wallet,
  Zap,
  type LucideIcon,
} from 'lucide-react'

const siteAssets = 'https://projetolt.shop/assets'

const recipes = [
  {
    name: 'Crepioca Caprese',
    calories: 175,
    image: `${siteAssets}/omelet_caprese-Cy0y1dcV.webp`,
  },
  {
    name: 'Panqueca de banana com aveia',
    calories: 230,
    image: `${siteAssets}/panqueca_frutas-DB23fKz7.webp`,
  },
  {
    name: 'Omelete misto',
    calories: 125,
    image: `${siteAssets}/omelete_misto-CzyU3kwp.webp`,
  },
  {
    name: 'Vitamina de morango com banana',
    calories: 175,
    image: `${siteAssets}/strawberry_smoothie-DxHN-Hv3.webp`,
  },
  {
    name: 'Crepioca de frango',
    calories: 330,
    image: `${siteAssets}/crepioca_frango_new-DVWljocb.webp`,
  },
  {
    name: 'Panqueca de banana',
    calories: 280,
    image: `${siteAssets}/banana_cupcake-D7Edm0Bd.webp`,
  },
  {
    name: 'Cuscuz com ovo',
    calories: 325,
    image: `${siteAssets}/cuscuz_ovo_new-BLJUkKIX.webp`,
  },
  {
    name: 'Crepe de banana',
    calories: 195,
    image: `${siteAssets}/banana_crepe_new-CM9ESYFE.webp`,
  },
  {
    name: 'Shakshuka',
    calories: 195,
    image: `${siteAssets}/shakshuka_v2-C3toNqG-.webp`,
  },
  {
    name: 'Cuscuz com queijo',
    calories: 180,
    image: `${siteAssets}/cuscuz_queijo_new-8I0Vt0Ro.webp`,
  },
  {
    name: 'Croque monsieur',
    calories: 180,
    image: `${siteAssets}/croque_monsieur_new-25DCd7sv.webp`,
  },
  {
    name: 'Pão de queijo de frigideira',
    calories: 275,
    image: `${siteAssets}/pao_queijo_frigideira-CXyUcFcG.webp`,
  },
]

const benefits: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Utensils,
    title: 'Saia da rotina do pão todo dia',
    description:
      '80 opções diferentes para você variar seu café da manhã de forma simples e prática.',
  },
  {
    icon: Wallet,
    title: 'Ingredientes simples e acessíveis',
    description:
      'Use ingredientes baratos e fáceis de encontrar para preparar seu café da manhã completo e saboroso.',
  },
  {
    icon: BookOpen,
    title: 'Passo a passo completo',
    description:
      'Receitas claras, diretas e fáceis de seguir, mesmo para quem não tem muita prática na cozinha.',
  },
  {
    icon: Zap,
    title: 'Receitas prontas em poucos minutos',
    description:
      'Em apenas 5 minutos você terá opções práticas para sua rotina corrida.',
  },
  {
    icon: Leaf,
    title: 'Sem complicação',
    description:
      'Receitas com ingredientes fáceis de encontrar que você já tem na sua cozinha.',
  },
  {
    icon: Smartphone,
    title: 'Acesse onde quiser',
    description:
      'Use no celular, tablet ou computador — ou imprima suas receitas favoritas para deixar na cozinha.',
  },
]

const bonuses = [
  {
    number: 'BÔNUS 1',
    title: '+50 Sobremesas Zero Açúcar',
    description:
      'Receitas práticas e saborosas para matar a vontade de sobremesa sem depender do açúcar.',
    price: 'R$ 24,90',
    image: `${siteAssets}/sobremesas-v2-ChbIIKJS.webp`,
  },
  {
    number: 'BÔNUS 2',
    title: 'Planejamento Semanal Pronto',
    description:
      'Para você saber exatamente o que preparar em cada dia da semana.',
    price: 'R$ 19,90',
    image: `${siteAssets}/planejamento-semanal-CGlaECK9.webp`,
  },
  {
    number: 'BÔNUS 3',
    title: 'Guia de Lanches Saudáveis',
    description: 'Ideias práticas e leves para comer entre as refeições.',
    price: 'R$ 17,90',
    image: `${siteAssets}/guia-lanches-v2-zUPFp5EE.webp`,
  },
  {
    number: 'BÔNUS 4',
    title: 'Lista de Compras Econômica da Semana',
    description:
      'Lista com ingredientes acessíveis para ajudar você com as receitas sem gastar muito.',
    price: 'R$ 19,90',
    image: `${siteAssets}/lista-compras-D3KAK-vB.webp`,
  },
  {
    number: 'BÔNUS 5',
    title: 'Café da Manhã para Desinchar e Começar o Dia Mais Leve',
    description: 'Guia com receitas para desinchar logo pela manhã.',
    price: 'R$ 21,90',
    image: `${siteAssets}/bonus5-capa-CkHesvD4.webp`,
  },
]

const basicFeatures = [
  '80 Receitas Saudáveis e Práticas para Substituir o Pão PDF',
  'Acesso Imediato pela Área de Membros',
  'Garantia de 7 dias',
  'Acesso vitalício + Atualizações',
  '+50 Sobremesas Zero Açúcar',
  'Planejamento Semanal Pronto',
  'Guia de Lanches Saudáveis',
  'Lista de Compras Econômica da Semana',
]

const premiumFeatures = [
  '80 Receitas Saudáveis e Práticas para Substituir o Pão PDF',
  '+50 Sobremesas Zero Açúcar',
  '+25 Lanches Saudáveis',
  'Café da Manhã para Desinchar e Começar o Dia Mais Leve',
  'Lista de Compras Econômica da Semana',
  'Suporte VIP',
  'Planejamento Semanal Pronto',
  'Acesso imediato pela Área de Membros',
  'Garantia de 30 dias',
  'Acesso vitalício + Atualizações',
]

const reviews = [
  {
    name: 'Patrícia Almeida',
    date: '18 de fevereiro de 2026',
    message:
      'Fiz a crepioca de frango e minha família pediu pra repetir no dia seguinte!',
    likes: 103,
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Roberta Mendes',
    date: '27 de fevereiro de 2026',
    message:
      'MARAVILHOSO, muita variedade, tá me ajudando bastante na cozinha. Nem acredito que ele é esse valor.',
    likes: 98,
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'Rafael Cardoso',
    date: '10 de janeiro de 2026',
    message:
      'Gostei muito porque não parece aquelas receitas difíceis de dieta. São ideias práticas mesmo, com ingredientes que eu já tenho em casa.',
    likes: 87,
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Juliana Ribeiro',
    date: '5 de fevereiro de 2026',
    message:
      'Nunca imaginei que dava pra fazer tanta coisa no café da manhã! Já testei 4 receitas e todas ficaram uma delícia!',
    likes: 142,
    photo: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    name: 'Bruno Martins',
    date: '23 de janeiro de 2026',
    message:
      'Eu queria diminuir o pão, mas não sabia o que comer no lugar. O material me ajudou demais, principalmente pelas receitas rápidas.',
    likes: 76,
    photo: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
  {
    name: 'Camila Nogueira',
    date: '12 de março de 2026',
    message:
      'Comprei e já fiz a Vitamina de Morango com Banana... ficou incrível! Recomendo pra quem quer economizar e comer bem logo de manhã.',
    likes: 119,
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
]

const faqItems = [
  {
    question: 'Como vou receber o material?',
    answer:
      'Logo após a confirmação do pagamento, você recebe o email com o acesso imediato para a área de membros com todas as receitas, o PDF completo.',
  },
  {
    question: 'O livro pode ser impresso?',
    answer:
      'Sim! O PDF é otimizado para impressão. Você pode imprimir todas as receitas e colar na geladeira.',
  },
  {
    question: 'Tem receitas para quem está de dieta?',
    answer:
      'Sim. O material reúne opções variadas para você montar um café da manhã mais leve e prático, de acordo com sua rotina.',
  },
  {
    question: 'Não sei cozinhar muito bem... serve pra mim?',
    answer:
      'Sim! As receitas têm ingredientes simples e instruções diretas, para facilitar o preparo mesmo para quem está começando.',
  },
  {
    question: 'Posso acessar pelo celular?',
    answer:
      'Pode. O material fica disponível na área de membros e pode ser acessado pelo celular, tablet ou computador.',
  },
  {
    question: 'E se eu não gostar? Tem garantia?',
    answer:
      'Você tem garantia de 30 dias. Se o material não atender às suas expectativas, entre em contato pelo suporte informado no email de compra.',
  },
]

function PrimaryLink({
  children,
  href = '#ofertas',
  className = '',
}: {
  children: React.ReactNode
  href?: string
  className?: string
}) {
  return (
    <a className={`primary-link ${className}`} href={href}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={19} strokeWidth={2.5} />
    </a>
  )
}

function SectionHeading({
  children,
  description,
  className = '',
  id,
}: {
  children: React.ReactNode
  description?: string
  className?: string
  id?: string
}) {
  return (
    <div className={`section-heading ${className}`}>
      <h2 id={id}>{children}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}

function PromoBar({ date }: { date: string }) {
  return (
    <div className="promo-bar" role="note">
      <div className="promo-bar-content">
        <Flame aria-hidden="true" size={16} fill="currentColor" />
        <strong>ESSA PROMOÇÃO ACABA HOJE!</strong>
        <time>{date}</time>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          <span>80 CAFÉS DA MANHÃ SAUDÁVEIS</span>
          <span className="hero-title-accent">PARA SUBSTITUIR O PÃO</span>
        </h1>
        <p>
          Varie seu café da manhã de forma saudável, prática e saborosa, com
          receitas rápidas para substituir o pão sem cair na mesmice.
        </p>
      </div>

      <div className="hero-image-wrap">
        <img
          className="hero-image"
          src={`${siteAssets}/hero-v11-COwGd8CA.webp`}
          alt="Livro e celular com as 80 receitas de cafés da manhã saudáveis para substituir o pão"
          width={1254}
          height={1254}
          fetchPriority="high"
        />
      </div>

      <div className="hero-offer">
        <p className="old-price">De R$ 67,00</p>
        <p className="hero-price">
          <span className="currency">R$</span>10,00
        </p>
        <PrimaryLink className="hero-cta">QUERO AS RECEITAS AGORA</PrimaryLink>

        <div className="trust-row" aria-label="Compra segura, garantia e acesso imediato">
          <span>
            <ShieldCheck aria-hidden="true" /> Compra Segura
          </span>
          <span>
            <BadgeCheck aria-hidden="true" /> Garantia 30 dias
          </span>
          <span>
            <Zap aria-hidden="true" /> Acesso Imediato
          </span>
        </div>

        <div className="hero-stats">
          <div>
            <strong>2.400+</strong>
            <span>COMPRADORES</span>
          </div>
          <div>
            <strong>80</strong>
            <span>RECEITAS</span>
          </div>
          <div>
            <strong>30 dias</strong>
            <span>GARANTIA</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  const problems: { icon: LucideIcon; text: string }[] = [
    { icon: Clock3, text: 'Não quer depender do pão no café da manhã todos os dias' },
    { icon: Leaf, text: 'Busca opções simples e saudáveis' },
    { icon: Wallet, text: 'Quer economizar no mercado' },
    { icon: Heart, text: 'Não sabe o que comer no lugar do pão' },
    { icon: Utensils, text: 'Quer opções completas para variar' },
    { icon: Zap, text: 'Quero ideias rápidas para a semana' },
  ]

  return (
    <section className="problem-section" aria-labelledby="problem-title">
      <div className="site-container">
        <SectionHeading
          id="problem-title"
          className="problem-heading"
          description="O pão é rápido, prático e faz parte da rotina, mas muita gente acaba comendo sempre a mesma coisa por falta de ideias simples e saudáveis. Isso acontece com você?"
        >
          <>
            VOCÊ AINDA COME SEMPRE PÃO
            <br />
            <span>NO CAFÉ DA MANHÃ?</span>
          </>
        </SectionHeading>

        <div className="problem-grid">
          {problems.map(({ icon: Icon, text }) => (
            <div className="problem-card" key={text}>
              <span className="problem-icon">
                <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
              </span>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="better-way">
          <span aria-hidden="true" />
          <p>EXISTE UMA FORMA MELHOR</p>
          <span aria-hidden="true" />
        </div>

        <div className="attention-card">
          <div className="attention-icon">
            <Flame aria-hidden="true" size={24} fill="currentColor" />
          </div>
          <div>
            <h3>ATENÇÃO! ESSA OFERTA ENCERRA HOJE!</h3>
            <p>
              Após o encerramento, o preço volta ao normal.{' '}
              <strong>Garanta agora com 76% de desconto.</strong>
            </p>
          </div>
          <a href="#ofertas" aria-label="Ver os planos com desconto">
            <ArrowRight aria-hidden="true" size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  return (
    <section className="benefits-section" aria-labelledby="benefits-title">
      <div className="site-container">
        <SectionHeading id="benefits-title" className="benefits-heading">
          <>
            POR QUE ESSE LIVRO
            <br />
            NÃO PODE FALTAR
            <br />
            <span>NO SEU CAFÉ DA MANHÃ</span>
          </>
        </SectionHeading>

        <div className="benefits-layout">
          <div className="benefits-product-image">
            <img
              src={`${siteAssets}/livro-cook-cozinha-v2-BC93bQ_q.webp`}
              alt="E-book 80 Cafés da Manhã Saudáveis com receitas para substituir o pão"
              width={671}
              height={503}
              loading="lazy"
            />
          </div>
          <div className="benefits-grid">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article className="benefit-item" key={title}>
                <span className="benefit-icon">
                  <Icon aria-hidden="true" size={25} strokeWidth={1.8} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <PrimaryLink className="section-cta">QUERO AS RECEITAS AGORA</PrimaryLink>
      </div>
    </section>
  )
}

function RecipesSection() {
  return (
    <section className="recipes-section" aria-labelledby="recipes-title">
      <div className="site-container">
        <SectionHeading
          id="recipes-title"
          className="recipes-heading"
          description="São 80 ideias práticas e saudáveis para substituir o pão, variar o café da manhã e comer melhor sem complicar sua rotina."
        >
          <>
            VEJA O QUE VOCÊ VAI
            <br />
            <span>APRENDER A PREPARAR</span>
          </>
        </SectionHeading>

        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <article className="recipe-card" key={recipe.name}>
              <div className="recipe-image-wrap">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  width={640}
                  height={360}
                  loading="lazy"
                />
                <span className="calorie-badge">
                  <Flame aria-hidden="true" size={14} fill="currentColor" />
                  {recipe.calories} kcal
                </span>
              </div>
              <h3>{recipe.name}</h3>
            </article>
          ))}
        </div>

        <p className="more-recipes">E MUITO MAIS...</p>
        <PrimaryLink className="section-cta">QUERO AS RECEITAS AGORA</PrimaryLink>
      </div>
    </section>
  )
}

function BonusesSection() {
  return (
    <section className="bonuses-section" aria-labelledby="bonuses-title">
      <div className="site-container">
        <SectionHeading
          id="bonuses-title"
          className="bonuses-heading"
          description="Mais do que receitas: adquirindo hoje você recebe os bônus para ajudar você a economizar tempo, dinheiro e ideias."
        >
          <>
            HOJE VOCÊ AINDA LEVA
            <br />
            <span>TUDO ISSO DE GRAÇA</span>
          </>
        </SectionHeading>

        <div className="bonuses-grid">
          {bonuses.map((bonus) => (
            <article className="bonus-card" key={bonus.number}>
              <div className="bonus-image-wrap">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  width={360}
                  height={270}
                  loading="lazy"
                />
                <span className="bonus-number">{bonus.number}</span>
              </div>
              <div className="bonus-content">
                <h3>{bonus.title}</h3>
                <p>{bonus.description}</p>
                <div className="bonus-price">
                  <del>{bonus.price}</del>
                  <span>GRÁTIS</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="bonus-total">
          Valor total dos bônus: <strong>R$ 96,00</strong> — Hoje inclusos
          gratuitamente!
        </p>
      </div>
    </section>
  )
}

function PlanCard({
  premium = false,
  features,
}: {
  premium?: boolean
  features: string[]
}) {
  const image = premium
    ? `${siteAssets}/premium-bundle-v3-5zAHUzQQ.webp`
    : `${siteAssets}/plano-basico--0E3kBLk.webp`
  const checkoutUrl = premium
    ? 'https://pay.lowify.com.br/checkout?product_id=uGpgts'
    : 'https://pay.lowify.com.br/checkout?product_id=mvlXaE'

  return (
    <article className={`plan-card${premium ? ' plan-card-premium' : ''}`}>
      {premium ? <div className="popular-label">⭐ MAIS ESCOLHIDO</div> : null}
      <div className="plan-label">{premium ? 'PREMIUM' : 'BÁSICO'}</div>
      <img
        className="plan-image"
        src={image}
        alt={
          premium
            ? 'Pacote premium completo do guia Café da Manhã Saudável com bônus'
            : 'Livro 80 Cafés da Manhã Saudáveis para Substituir o Pão'
        }
        width={640}
        height={512}
        loading="lazy"
      />
      <h3>{premium ? 'PLANO COMPLETO + BÔNUS' : 'GUIA CAFÉ DA MANHÃ'}</h3>
      <p className="plan-subtitle">
        {premium ? 'O guia completo para o seu café da manhã' : 'Plano básico iniciante'}
      </p>

      <ul className="plan-features">
        {features.map((feature) => (
          <li key={feature}>
            <Check aria-hidden="true" size={17} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="plan-price-block">
        <p className="old-price">De R$ {premium ? '147,00' : '67,00'}</p>
        <p className="plan-price">R${premium ? '24,90' : '10,00'}</p>
      </div>

      <a className="primary-link plan-cta" href={checkoutUrl} target="_blank" rel="noopener noreferrer">
        <span>{premium ? 'QUERO O PLANO COMPLETO' : 'COMPRAR AGORA'}</span>
        <ArrowRight aria-hidden="true" size={19} strokeWidth={2.5} />
      </a>
      <p className="plan-assurance">
        <LockKeyhole aria-hidden="true" size={15} /> Pagamento seguro ·{' '}
        <ShieldCheck aria-hidden="true" size={15} /> Garantia 30 dias
      </p>
    </article>
  )
}

function PricingSection() {
  return (
    <section className="pricing-section" id="ofertas" aria-labelledby="pricing-title">
      <div className="site-container">
        <SectionHeading
          id="pricing-title"
          className="pricing-heading"
          description="Oferta com 76% de desconto — válida enquanto esta página estiver no ar"
        >
          ESCOLHA SEU PLANO
        </SectionHeading>

        <div className="pricing-grid">
          <PlanCard features={basicFeatures} />
          <PlanCard premium features={premiumFeatures} />
        </div>
      </div>
    </section>
  )
}

function RatingStars({ small = false }: { small?: boolean }) {
  return (
    <span className={`rating-stars${small ? ' rating-stars-small' : ''}`} aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} aria-hidden="true" fill="currentColor" />
      ))}
    </span>
  )
}

function TestimonialsSection() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="site-container">
        <SectionHeading
          id="testimonials-title"
          className="testimonials-heading"
          description="Resultados reais de quem aplicou as receitas na prática"
        >
          2.425 PESSOAS JÁ TRANSFORMARAM A COZINHA
        </SectionHeading>

        <div className="rating-summary">
          <div className="rating-score">
            <strong>4.9</strong>
            <RatingStars />
            <span>2.087 avaliações</span>
          </div>
          <div className="rating-bars" aria-label="Distribuição das avaliações">
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <div className="rating-bar-row" key={rating}>
                <span>{rating}</span>
                <div className="rating-bar-track">
                  <span style={{ width: `${[92, 6, 1, 1, 0][index]}%` }} />
                </div>
                <Star aria-hidden="true" size={13} fill="currentColor" />
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-header">
                <img
                  src={review.photo}
                  alt=""
                  width={44}
                  height={44}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3>{review.name}</h3>
                  <time>{review.date}</time>
                </div>
              </div>
              <RatingStars small />
              <p className="review-message">{review.message}</p>
              <div className="review-actions">
                <span>
                  <ThumbsUp aria-hidden="true" size={15} /> {review.likes}
                </span>
                <span>
                  <Heart aria-hidden="true" size={15} /> Curtir
                </span>
                <span>
                  <MessageCircle aria-hidden="true" size={15} /> Comentar
                </span>
              </div>
            </article>
          ))}
        </div>

        <PrimaryLink className="section-cta">QUERO AS RECEITAS AGORA</PrimaryLink>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="faq-container">
        <SectionHeading id="faq-title" className="faq-heading">
          DÚVIDAS FREQUENTES
        </SectionHeading>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <details className="faq-item" key={item.question} name="faq" open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" size={19} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCtaSection() {
  return (
    <section className="final-cta-section" aria-labelledby="final-title">
      <div className="final-cta-content">
        <span className="final-cta-kicker">
          <Sparkles aria-hidden="true" size={16} /> UMA NOVA ROTINA COMEÇA AQUI
        </span>
        <h2 id="final-title">
          CHEGA DE COMER PÃO
          <br />
          TODO DIA NO CAFÉ DA MANHÃ.
        </h2>
        <p>2.425 pessoas já descobriram isso. Você é o próximo?</p>
        <PrimaryLink className="final-cta-link">
          <Flame aria-hidden="true" size={18} fill="currentColor" />
          QUERO AS RECEITAS AGORA
        </PrimaryLink>
      </div>
    </section>
  )
}

export function BreakfastLandingPage() {
  const today = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'America/Sao_Paulo',
  }).format(new Date())
  const year = new Date().getFullYear()

  return (
    <div className="landing-page">
      <PromoBar date={today} />
      <main>
        <HeroSection />
        <ProblemSection />
        <BenefitsSection />
        <RecipesSection />
        <BonusesSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <footer className="site-footer">
        © {year} — 80 Cafés da Manhã Saudáveis. Todos os direitos reservados.
      </footer>
    </div>
  )
}
