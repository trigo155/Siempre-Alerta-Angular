import {Iimg} from 'src/app/models/Iglobal'


export interface Ibanda{
  id: number;
  name: string;
  description: string;
  integrantes: Imembers;
  img: Iimg;
  sentence: string;
}

export interface Imembers{
  voz: string;
  guitarra: string;
  bajo: string;
  bateria: string;
}
