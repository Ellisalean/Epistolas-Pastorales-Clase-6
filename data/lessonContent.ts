
import { Lesson } from '../types';

export const PASTORAL_LESSON_6: Lesson = {
  id: 'clase-6-pastorales',
  title: 'Epístolas Pastorales - Clase 6',
  subtitle: 'Órdenes del Jefe Supremo',
  totalSlides: 11,
  slides: [
    {
      id: 'c6-s1-intro',
      type: 'intro',
      title: 'Órdenes del Jefe Supremo',
      subtitle: 'Estudio de 1 Timoteo 6',
      visual: {
        type: 'image',
        source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/dd818fab-0166-4250-a33b-9ec8002bcc2a_rw_1920.jpg?h=37537689c483df5f4d6e05407d10d0bb',
        position: 'background',
        effect: 'overlay-dark'
      },
      content: 'En este capítulo, la atmósfera es militar. Pablo actúa como un general dando órdenes de parte del Señor, el Jefe Supremo, para guiar a Timoteo en su ministerio a diversos grupos y en su propia vida espiritual.'
    },
    {
      id: 'c6-s2-slaves',
      type: 'keynote-cards',
      title: 'Esclavos Creyentes',
      subtitle: 'Testimonio en el Trabajo',
      visual: { type: 'icon', source: 'Users' },
      interaction: {
        type: 'grid-cards',
        revealItems: [
          {
            title: 'Amos Inconversos',
            text: 'Honra al Evangelio.',
            icon: 'UserX',
            longContent: 'Si un esclavo se rebelaba contra su amo inconverso, traía deshonra al nombre de Dios. El testimonio laboral es una herramienta de evangelismo poderosa.',
            image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Amos Creyentes',
            text: 'No aprovecharse.',
            icon: 'UserCheck',
            longContent: 'La hermandad en Cristo no es excusa para la desobediencia. Al contrario, se debe servir mejor porque el amo es amado y creyente.',
            image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Libertad Espiritual',
            text: 'Posición Social vs Espiritual.',
            icon: 'Unlock',
            longContent: 'La libertad en Cristo no altera inmediatamente la posición social, pero transforma la actitud del corazón hacia el servicio.',
            image: 'https://myashestobeauty.com/wp-content/uploads/2020/08/Freedom-in-Christ.-Abortion-and-Healing-Recovery.png'
          },
          {
            title: 'Bendición Recíproca',
            text: 'Servicio mutuo.',
            icon: 'Handshake',
            longContent: 'Tanto el amo como el siervo se benefician cuando hay obediencia y respeto mutuo en el Señor.',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800'
          }
        ]
      }
    },
    {
      id: 'c6-s3-false-teachers',
      type: 'hermeneutics',
      title: 'Falsos Maestros',
      subtitle: 'Orgullo y Disputas',
      visual: {
        type: 'image',
        source: 'https://zonavertical.com/wp-content/uploads/2016/04/Como-Identificar-Falsos-Maestros-Zona-Vertical.jpg',
        position: 'left'
      },
      content: 'Los falsos maestros se caracterizan por rechazar la sana doctrina y promover un clima de conflicto.',
      interaction: {
        type: 'grid-cards',
        revealItems: [
          { 
            title: 'Rechazo', 
            text: 'No se sujetan a las sanas palabras de Jesús.', 
            icon: 'XCircle',
            longContent: 'Definición: El rechazo a la verdad bíblica surge de un corazón que prefiere sus propias ideas sobre la revelación divina.\n\nVersículo Clave: "Retén la forma de las sanas palabras que de mí oíste, en la fe y amor que es en Cristo Jesús." (2 Timoteo 1:13)',
            image: 'https://media.istockphoto.com/id/1139437880/es/vector/bosqueja-la-escena-con-el-gran-jefe-y-la-gente-peque%C3%B1a.jpg?s=612x612&w=0&k=20&c=44BrvJOj9wAWyfyTmY30vm09J0ytDZ1e3BLwY3At4XM='
          },
          { 
            title: 'Orgullo', 
            text: 'Tienen la cabeza inflada pero no saben nada.', 
            icon: 'ArrowUp',
            longContent: 'Definición: El falso conocimiento infla el ego, mientras que el verdadero conocimiento de Dios produce humildad.\n\nVersículo Clave: "Nada hagáis por contienda o por vanagloria; antes bien con humildad, estimando cada uno a los demás como superiores a él mismo." (Filipenses 2:3)',
            image: 'https://semperreformandaperu.org/wp-content/uploads/2018/06/orgulloso-e1528197152421.jpg?w=799&h=400&crop=1'
          },
          { 
            title: 'Delirio', 
            text: 'Interés morboso en discusiones necias.', 
            icon: 'Activity',
            longContent: 'Definición: Perderse en debates sin fin sobre palabras que no edifican, desviando la atención de la piedad práctica.\n\nVersículo Clave: "Pero evita las profanas pláticas sobre cosas vanas, porque conducirán más y más a la impiedad." (2 Timoteo 2:16)',
            image: 'https://fotografias.antena3.com/clipping/cmsimages01/2021/10/29/17C602EA-826E-4E36-AD4A-EF8AD89D5EE8/98.jpg?crop=1280,720,x0,y0&width=1900&height=1069&optimize=low&format=webply'
          },
          { 
            title: 'Frutos', 
            icon: 'AlertTriangle', 
            text: 'Envidias, pleitos, blasfemias y malas sospechas.',
            longContent: 'Definición: La falsa enseñanza no solo es error intelectual, sino que produce un carácter corrompido y relaciones rotas.\n\nVersículo Clave: "Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza..." (Gálatas 5:22-23)',
            image: 'https://tertuliadejuanamanuela.com/wp-content/uploads/2023/07/envidia.jpg'
          }
        ]
      }
    },
    {
      id: 'c6-s4-greed',
      type: 'split-visual',
      title: 'El Negocio Religioso',
      subtitle: 'Piedad como Ganancia',
      visual: {
        type: 'image',
        source: 'https://talamobile.mx/wp-content/uploads/sites/5/2023/08/golden-rmb-coins-bolsa-tela.jpg?w=957',
        position: 'right'
      },
      content: 'Para los falsos maestros, la religión no es un ministerio, sino un medio para amasar riquezas materiales.',
      bullets: [
        'Suponen que la piedad es una forma de ganar dinero.',
        'Usan la profesión de fe como un disfraz para la avaricia.',
        'Privan a las personas de la verdad mientras buscan su propio beneficio.',
        'Pablo advierte: El obrero es digno de su salario, pero el motivo no debe ser el lucro.'
      ]
    },
    {
      id: 'c6-s5-greed-truths',
      type: 'tabs-reveal',
      title: 'Verdades sobre la Riqueza',
      subtitle: 'Peligros de la Avaricia',
      visual: { type: 'icon', source: 'ShieldAlert' },
      interaction: {
        type: 'side-reveal',
        revealItems: [
          {
            title: 'Contentamiento',
            text: 'Suficiencia interna.',
            icon: 'Heart',
            longContent: 'El contentamiento genuino proviene de la piedad del corazón, no de la riqueza en mano. Las cosas materiales pierden su atracción.',
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/e7548bb4-b684-48e1-a3e6-2bb031f8fc41_rw_1920.jpg?h=6693086b6effa3fc95b396e155e6b22c'
          },
          {
            title: 'Temporalidad',
            text: 'Nada trajimos, nada llevaremos.',
            icon: 'Clock',
            longContent: 'Nadie se lleva nada al morir. Todo lo que amamos se quedará aquí para otros.',
            image: 'https://blog.infoempleo.com/media/2021/06/Tuempleo_reducir-temporalidad.jpg'
          },
          {
            title: 'Necesidades',
            text: 'Alimento y abrigo.',
            icon: 'Home',
            longContent: 'Las necesidades básicas son fáciles de suplir. Un hombre es rico en proporción a las cosas de las que puede prescindir.',
            image: 'https://www.divsal.cl/wp-content/uploads/2024/11/alimentacion-felicidad.jpg'
          },
          {
            title: 'La Trampa',
            text: 'Raíz de todos los males.',
            icon: 'Skull',
            longContent: 'El amor al dinero es una trampa que hunde a los hombres en destrucción y perdición. Es un naufragio espiritual.',
            image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800'
          }
        ]
      }
    },
    {
      id: 'c6-s6-pastor-character',
      type: 'split-stacked-reveal',
      title: 'El Hombre de Dios',
      subtitle: 'Huye y Sigue',
      visual: { type: 'icon', source: 'User' },
      content: 'Timoteo es llamado "Hombre de Dios", una designación para los grandes líderes bíblicos. Debe marcar un contraste con los falsos maestros.',
      interaction: {
        type: 'side-reveal',
        revealItems: [
          {
            title: 'Huye',
            text: 'Separación del pecado.',
            icon: 'ArrowLeft',
            longContent: 'No es cobardía, es sabiduría. Debe apartarse de la avaricia y las prácticas de los falsos maestros.',
            image: 'https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Sigue',
            text: 'Crecimiento positivo.',
            icon: 'ArrowRight',
            longContent: 'Sigue la justicia, la piedad, la fe, el amor, la paciencia y la mansedumbre. La separación sin crecimiento es aislamiento.',
            image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&q=80&w=800'
          }
        ]
      }
    },
    {
      id: 'c6-s7-fight',
      type: 'flashcards',
      title: 'La Buena Batalla',
      subtitle: 'Esfuerzo y Defensa',
      visual: { type: 'icon', source: 'Sword' },
      interaction: {
        type: 'flashcards',
        revealItems: [
          {
            title: 'Pelea',
            text: 'Agonizar por la fe. Esfuerzo atlético y militar para defender la verdad confiada.',
            icon: 'Shield',
            image: 'https://cdn.milenio.com/uploads/media/2021/01/19/heroico-colegio-militar-diseno-habilito_0_53_1200_747.jpeg'
          },
          {
            title: 'Echa Mano',
            text: 'Asirse de la vida eterna. Dejar que la vida de Dios obre en nuestra experiencia diaria.',
            icon: 'Zap',
            image: 'https://images.squarespace-cdn.com/content/v1/5148b380e4b0106646129f8e/1655147147836-EG48IB5C0WOFDNHDB999/invocar-el-nombre-del-senor+2219.jpg'
          },
          {
            title: 'Testimonio',
            text: 'Como Cristo ante Pilato. Un testimonio intrépido sin amedrentarse ante el enemigo.',
            icon: 'Mic2',
            image: 'https://www.baptistpress.com/wp-content/uploads/2022/04/discipleship-bible-study-iStock.jpeg'
          }
        ]
      }
    },
    {
      id: 'c6-s8-sovereign',
      type: 'hotspot-reveal',
      title: 'El Único Soberano',
      subtitle: 'La Gloria de Dios',
      visual: {
        type: 'image',
        source: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=1920',
        position: 'background'
      },
      interaction: {
        type: 'hotspots',
        revealItems: [
          {
            title: 'Rey de Reyes',
            text: 'Soberano de todo.',
            longContent: 'Frente al culto al emperador, Pablo afirma que solo Dios es el Soberano absoluto.',
            icon: 'Crown',
            x: 50,
            y: 30
          },
          {
            title: 'Inmortalidad',
            text: 'Vida inherente.',
            longContent: 'Solo Dios tiene inmortalidad por naturaleza. Él es el dador de la vida y no cambia.',
            icon: 'Sun',
            x: 20,
            y: 40
          },
          {
            title: 'Luz Inaccesible',
            text: 'Santidad y Pureza.',
            longContent: 'Dios habita en luz gloriosa, símbolo de su pureza absoluta. Solo a través de Cristo nos acercamos a Él.',
            icon: 'Zap',
            x: 80,
            y: 43
          }
        ]
      }
    },
    {
      id: 'c6-s9-stewardship',
      type: 'split-visual',
      title: 'Guarda el Encargo',
      subtitle: 'Fidelidad a la Verdad',
      visual: {
        type: 'image',
        source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/fa93a055-b522-4815-8a61-f7b9cfe2dc89_rw_1920.jpg?h=d607ba763a9dad03c8cc007b764dfd24',
        position: 'left'
      },
      content: 'Pablo encomendó la verdad a Timoteo, quien debe pasarla a otros fielmente.',
      bullets: [
        'Evita las profanas pláticas sobre cosas vanas.',
        'Cuidado con la "ciencia" falsamente llamada (Gnosis).',
        'Las enseñanzas incorrectas desvían de la fe gradualmente.',
        'Somos administradores de las doctrinas de la fe.'
      ]
    },
    {
      id: 'c6-s10-rich',
      type: 'keynote-cards',
      title: 'Instrucciones a los Ricos',
      subtitle: 'Administración del Reino',
      visual: { type: 'icon', source: 'Coins' },
      interaction: {
        type: 'grid-cards',
        revealItems: [
          {
            title: 'Sé Humilde',
            text: 'No ser altivos.',
            icon: 'ArrowDown',
            longContent: 'Las riquezas no deben inflar el orgullo. Somos administradores, no propietarios. Todo viene de Dios.',
            image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Confía en Dios',
            text: 'No en las riquezas inciertas.',
            icon: 'ShieldCheck',
            longContent: 'Las riquezas son inseguras y duran poco. Nuestra confianza debe estar en el Dador, no en las cosas.',
            image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Disfruta',
            text: 'Dios da para disfrutar.',
            icon: 'Smile',
            longContent: 'No es hedonismo, es gratitud. Disfrutar de las bendiciones de Dios para su gloria es bíblico.',
            image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Usa y Comparte',
            text: 'Ricos en buenas obras.',
            icon: 'Gift',
            longContent: 'Debemos poner a trabajar el dinero para el bien de otros, invirtiendo en la vida que es verdadera.',
            image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800'
          }
        ]
      }
    },
    {
      id: 'c6-s12-completion',
      type: 'completion',
      title: '¡Clase 6 Completada!',
      subtitle: 'La Gracia sea con vosotros',
      visual: {
        type: 'image',
        source: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=1600',
        position: 'background'
      },
      content: 'Has terminado el estudio de 1 Timoteo 6. Sigue peleando la buena batalla, guardando el encargo y confiando en el Único Soberano.'
    }
  ]
};
