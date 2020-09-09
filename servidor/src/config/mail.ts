interface IMailConfig {
  driver: 'ethereal' | 'ses' | 'gator';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'robson@limonadasolucoes.com.br',
      name: 'Robson Feitosa Pimentel',
    },
  },
} as IMailConfig;
