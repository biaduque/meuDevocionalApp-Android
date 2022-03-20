import cotidiano from './cotidiano.json';
import vidaComDeus from './vida-com-deus.json';
import estudos from './estudos.json';

class MockData {
  constructor() {
    this.cotidianoMock = cotidiano;
    this.vidaComDeusMock = vidaComDeus;
    this.estudosMock = estudos;
  }

  widgetContentMock() {
    const widgetsContent = [
      {
        titulo: 'Não esqueça de anotar e compartilhar a devocional de hoje!',
        descricao: 'Meu Devocional',
        backgroundColor: 'verde2',
      },
      {
        titulo: 'Já adicionou um motivo para ser grato no Mural hoje?',
        descricao: 'Gratidão',
        backgroundColor: 'amarelo1',
      },
      {
        titulo: 'Que tal escolher uma devocional para leitura e louvor hoje?',
        descricao: 'Worship Time',
        backgroundColor: 'verde2',
      },
      {
        titulo:
          'Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.',
        descricao: 'Salmo 37:5',
        backgroundColor: 'amarelo3',
      },
      {
        titulo: 'Portanto, não vos inquieteis com o dia de amanhã [...]',
        descricao: 'Mateus 6:34',
        backgroundColor: 'amarelo1',
      },
      {
        titulo:
          'Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.',
        descricao: 'Colossenses 3:14',
        backgroundColor: 'verde2',
      },
      {
        titulo: 'Conta pra Ele, conte com Ele!',
        descricao: 'Momento de oração',
        backgroundColor: 'amarelo2',
      },
      {
        titulo: 'Vinde a mim todos os que estais cansados, e eu vos aliviarei.',
        descricao: 'Mateus 11:28',
        backgroundColor: 'amarelo3',
      },
      {
        titulo: 'E peço isto: que o vosso amor cresça mais e mais [...]',
        descricao: 'Filipenses 1:9',
        backgroundColor: 'amarelo1',
      },
      {
        titulo: 'E conhecereis a verdade, e a verdade vos libertará.',
        descricao: 'João 8:32',
        backgroundColor: 'verde2',
      },
      {
        titulo: 'Porque vivemos por fé, e não pelo que vemos.',
        descricao: '2 Cortíntios 5:7',
        backgroundColor: 'amarelo2',
      },
      {
        titulo:
          'Porque, onde estiver o vosso tesouro, ali estará o vosso coração.',
        descricao: 'Lucas 12:34',
        backgroundColor: 'amarelo3',
      },
      {
        titulo: 'Quem não ama não conhece a Deus, porque Deus é amor.',
        descricao: '1 João 4:8',
        backgroundColor: 'amarelo1',
      },
    ];

    return widgetsContent;
  }
}

export default MockData;
