

interface CardProps {
	id: number;
	name: string;
	color: string;
	head: string;
	click?: boolean;
	background?: string;
}

const cardProps: CardProps[] = [
	{
	id: 0,
	color:"#F200FF",
	background: "../assets/5.png",
	head:"Quem-Somos",
	name:"Quem-Somos",
	click: false
	},
	{
	id: 1,
	color:"#2790A6",
	background: "../assets/6.png",
	head:"Serviços",
	name:"Serviços",
	click: false
	},
	{
		id: 2,
	color:"#266096",
	background: "../assets/7.png",
	head:"Parceiros",
	name:"Parceiros",
	click: false
	},
	{
		id: 3,
	color:"#FD1E5D",
	background: "../assets/8.png",
	head:"Projetos",
	name:"Projetos",
	click: false
	},
	{
		id: 4,
	color:"#4CC495",
	background: "../src/assets/9.png",
	head:"Observatório",
	name:"Observatório",
	click: false
	},
	{
		id: 5,
	color:"#B7AEAF",
	background: "../assets/10.png",
	head:"Contato",
	name:"Contato",
	click: false
	}
];

export default cardProps;
