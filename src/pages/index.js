import React from "react";
import theme from "theme";
import { Theme, Link, Box, Image, Icon, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import { MdPhone } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7e0ea03d84d4001ec380ab/images/%D1%83%D0%B7%D0%BE%D1%80.png?v=2020-10-08T06:50:24.100Z) 0% 0% /cover no-repeat scroll padding-box">
			<Override slot="SectionContent" position="relative" />
			<Box
				position="absolute"
				bottom="auto"
				height="550px"
				left="auto"
				right="-15px"
				top="116px"
				width="500px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7e0ea03d84d4001ec380ab/images/%D0%91%D0%B0%D1%82%D0%BE%D0%BD%D1%87%D0%B8%D0%BA%D0%B8.png?v=2020-10-08T06:48:18.216Z) 0% 0% /contain no-repeat scroll padding-box"
			/>
			<Stack>
				{"    "}
				<StackItem width="15%" display="flex">
					<Image width="70px" height="70px" src="https://uploads.quarkly.io/5f7e0ea03d84d4001ec380ab/images/logo.png?v=2020-10-07T18:55:13.877Z" object-fit="contain" />
					{"        "}{"    "}
				</StackItem>
				{"    "}
				<StackItem width="65%" display="flex" font="16px --fontFamily-googleAlegreyaSans">
					<Override slot="StackItemContent" align-items="center" />
					<Link href="#" text-decoration-line="initial" color="#fff" margin="0px 30px 0px 0px">
						О нас
					</Link>
					<Link href="#" text-decoration-line="initial" color="#fff" margin="0px 30px 0px 0px">
						Батончики
					</Link>
					<Link href="#" text-decoration-line="initial" color="#fff" margin="0px 30px 0px 0px">
						Команда
					</Link>
					<Link href="#" text-decoration-line="initial" color="#fff" margin="0px 30px 0px 0px">
						Меню
					</Link>
					<Link href="#" text-decoration-line="initial" color="#fff" margin="0px 30px 0px 0px">
						Отзывы
					</Link>
					<Link href="#" text-decoration-line="initial" color="#fff" margin="0px 30px 0px 0px">
						Как мы работаем
					</Link>
					<Link href="#" text-decoration-line="initial" color="#fff">
						Контакты
					</Link>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="20%" display="flex">
					<Override slot="StackItemContent" align-items="center" color="#fff" />
					{"        "}
					<Icon category="md" icon={MdPhone} margin="0px 10px 0px 0px" />
					<Text font="normal 400 20px/1.5 --fontFamily-googleAlegreyaSans" margin="0px 0px 0px 0px" display="inline-block">
						8 800 903 90 90
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Box width="50%" margin="100px 0px 70px 0px">
				<Text color="--red" font="600 48px --fontFamily-googleAlegreyaSans" text-transform="uppercase">
					натуральные{" "}
					<br />
					{"\n"}шоколадные{" "}
					<br />
					{"\n"}батончики
				</Text>
				<Text color="#fff" font="21px --fontFamily-googleAlegreyaSans" margin="16px 0px 100px 0px">
					Наши батончики идеально подходят для 
тех,{" "}
					<br />
					кто следит за своим здоровьем
				</Text>
				<Link
					href="#"
					text-decoration-line="initial"
					width="160px"
					height="50px"
					display="flex"
					align-items="center"
					justify-content="center"
					background="#fff"
					color="--dark"
					text-transform="uppercase"
					font="bold 18px --fontFamily-googleAlegreyaSans"
					border-radius="40px"
				>
					Заказать
				</Link>
			</Box>
			<Stack width="50%" margin="-16px -16px 100px -16px">
				{"    "}
				<StackItem width="33.33%" display="flex">
					<Override slot="StackItemContent" align-items="center" />
					<Image
						width="64px"
						height="64px"
						object-fit="contain"
						src="https://uploads.quarkly.io/5f7e0ea03d84d4001ec380ab/images/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0.png?v=2020-10-08T06:44:08.793Z"
						margin="0px 10px 0px 0px"
					/>
					<Text color="#fff" font="600 16px --fontFamily-googleAlegreyaSans">
						100%
						<br />
						натуральный
						<br />
						продукт
					</Text>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex">
					<Override slot="StackItemContent" align-items="center" />
					<Image
						width="64px"
						height="64px"
						object-fit="contain"
						src="https://uploads.quarkly.io/5f7e0ea03d84d4001ec380ab/images/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B02.png?v=2020-10-08T06:44:08.813Z"
						margin="0px 10px 0px 0px"
					/>
					<Text color="#fff" font="600 16px --fontFamily-googleAlegreyaSans">
						3-5 дней
доставка 
по РФ
					</Text>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex">
					<Override slot="StackItemContent" align-items="center" />
					<Image
						width="64px"
						height="64px"
						object-fit="contain"
						src="https://uploads.quarkly.io/5f7e0ea03d84d4001ec380ab/images/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B03.png?v=2020-10-08T06:44:08.790Z"
						margin="0px 10px 0px 0px"
					/>
					<Text color="#fff" font="600 16px --fontFamily-googleAlegreyaSans">
						Не портит
фигуру
					</Text>
					{"        "}{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section>
			<Override slot="SectionContent" align-items="center" />
			<Box width="50%" margin="50px 0px 50px 0px">
				<Text text-align="center" font="400 48px --fontFamily-googleAlegreyaSans" text-transform="uppercase">
					почему chocco?
				</Text>
				<Text text-align="center" font="18px --fontFamily-googleAlegreyaSans">
					В нашем мире все происходит очень быстро, поэтому мы
делаем батончики, которые удобно взять с собой.
				</Text>
			</Box>
			<Stack margin="-16px -16px 100px -16px">
				{"    "}
				<StackItem width="33.33%" display="flex" min-width="260px">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					{"        "}
					<Box
						width="120px"
						height="120px"
						display="flex"
						align-items="center"
						justify-content="center"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7e0ea03d84d4001ec380ab/images/%D0%AD%D0%BB%D0%BB%D0%B8%D0%BF%D1%81%202.png?v=2020-10-08T07:02:38.245Z) 0% 0% /cover no-repeat scroll padding-box"
						margin="0px 0px 50px 0px"
					>
						<Image width="70px" height="70px" src="https://uploads.quarkly.io/5f7e0ea03d84d4001ec380ab/images/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0.png?v=2020-10-08T07:03:25.164Z" />
					</Box>
					<Text font="normal 600 27px/1.5 --fontFamily-googleAlegreyaSans" margin="0px 0px 10px 0px" display="inline-block">
						Полезно
					</Text>
					<Text font="normal 300 18px/1.5 --fontFamily-googleAlegreyaSans" margin="0px 0px 0px 0px" display="inline-block" text-align="center">
						Натуральность - ключевое качество
нашей продукции. Мы используем
только природные ингредиенты.
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" width="33.33%" min-width="260px">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					{"        "}
					<Box
						width="120px"
						height="120px"
						display="flex"
						align-items="center"
						justify-content="center"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7e0ea03d84d4001ec380ab/images/%D0%AD%D0%BB%D0%BB%D0%B8%D0%BF%D1%81%202.png?v=2020-10-08T07:02:38.245Z) 0% 0% /cover no-repeat scroll padding-box"
						margin="0px 0px 50px 0px"
					>
						<Image width="70px" height="70px" src="https://uploads.quarkly.io/5f7e0ea03d84d4001ec380ab/images/%D0%BC%D0%BE%D1%80%D0%B4%D0%B0.png?v=2020-10-08T07:08:16.192Z" background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box" />
					</Box>
					<Text font="normal 600 27px/1.5 --fontFamily-googleAlegreyaSans" margin="0px 0px 10px 0px" display="inline-block">
						Вкусно
					</Text>
					<Text font="normal 300 18px/1.5 --fontFamily-googleAlegreyaSans" margin="0px 0px 0px 0px" display="inline-block" text-align="center">
						Нежный, ненавязчивый, изысканный – 
так клиенты описывают вкусовые 
качества наших батончиков.
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" width="33.33%" min-width="260px">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					{"        "}
					<Box
						width="120px"
						height="120px"
						display="flex"
						align-items="center"
						justify-content="center"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7e0ea03d84d4001ec380ab/images/%D0%AD%D0%BB%D0%BB%D0%B8%D0%BF%D1%81%202.png?v=2020-10-08T07:02:38.245Z) 0% 0% /cover no-repeat scroll padding-box"
						margin="0px 0px 50px 0px"
					>
						<Image width="70px" height="70px" src="https://uploads.quarkly.io/5f7e0ea03d84d4001ec380ab/images/%D1%80%D1%83%D0%BA%D0%B0.png?v=2020-10-08T07:08:16.245Z" />
					</Box>
					<Text font="normal 600 27px/1.5 --fontFamily-googleAlegreyaSans" margin="0px 0px 10px 0px" display="inline-block">
						Питательно
					</Text>
					<Text font="normal 300 18px/1.5 --fontFamily-googleAlegreyaSans" margin="0px 0px 0px 0px" display="inline-block" text-align="center">
						Высокое содержание качественного 
белка, а также всех необходимых 
витаминов и минералов.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});