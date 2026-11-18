/* CONFIGURAÇÃO DA TELA DE STARTING — edite só entre as aspas */
window.CONFIG = {
  /* músicas que o próprio overlay toca (arquivos nesta mesma pasta).
     Deixe [] pra não tocar nada (aí roda a 120 BPM = 1 minuto).
     Exemplo: musicas: ['Artista - Musica.mp3', 'Outro - Som.mp3'], */
  musicas: [],

  /* mostrar trechos da letra (true = sim, false = não) */
  letra: true,

  /* andamento quando não tem música tocando */
  bpm: 120,

  /* CONTADOR REGRESSIVO (opcional) — use só um dos dois:
     contador: 10        → conta 10 minutos a partir de quando a cena abre
     horario: '20:30'    → conta até esse horário
     Deixe 0 e '' pra não mostrar contador. */
  contador: 0,
  horario: '',
};
