import React from "react";
import theme from "theme";
import { Theme, Image, Box, Text } from "@quarkly/widgets";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Image width="64px" height="auto" src="https://uploads.quarkly.io/video/adaptive-image-test-amz-logo3x.webp" srcSet="https://uploads.quarkly.io/video/adaptive-image-test-amz-logo3x.webp 3x,https://uploads.quarkly.io/video/adaptive-image-test-amz-logo2x.webp 2x,https://uploads.quarkly.io/video/adaptive-image-test-amz-logo1x.webp 1x" />
			</Box>
		</Section>
		<Box
			box-sizing="border-box"
			padding="24px 24px 24px 24px"
			display="flex"
			flex-direction="column"
			align-items="flex-start"
		>
			<Image src="https://uploads.quarkly.io/video/adaptive-image-test-fullwidth-1640w.webp" width="100%" srcSet="https://uploads.quarkly.io/video/adaptive-image-test-fullwidth-1640w.webp 1640w,https://uploads.quarkly.io/video/adaptive-image-test-fullwidth-320w.webp 320w,https://uploads.quarkly.io/video/adaptive-image-test-fullwidth-768w.webp 768w,https://uploads.quarkly.io/video/adaptive-image-test-fullwidth-1280w.webp 1280w" />
		</Box>
		<Section background="#fff" padding="100px 0 110px 0" min-height="500px">
			<Stack>
				<StackItem
					width="50%"
					display="flex"
					sm-width="100%"
					sm-height="500px"
					height="100%"
					md-width="100%"
					md-order="1"
					md-height="auto"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Image
						src="https://uploads.quarkly.io/video/adaptive-image-test-layout-1280w.webp"
						max-width="100%"
						height="auto"
						object-fit="contain"
						object-position="100%"
						width="100%"
						max-height="100%"
						srcSet="https://uploads.quarkly.io/video/adaptive-image-test-layout-320w.webp 320w,https://uploads.quarkly.io/video/adaptive-image-test-layout-768w.webp 768w,https://uploads.quarkly.io/video/adaptive-image-test-layout-1280w.webp 1280w"
						sizes="(max-width: 768px) 100vw"
					/>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" justify-content="space-between" />
					{"        "}
					<Text
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
						margin="0px 0px 16px 0px"
					>
						eyebrow
					</Text>
					<Text
						font="--headline1"
						margin="0px 0px 0px 0px"
						sm-margin="0px 0px 50px 0px"
						flex="1 1 auto"
						md-margin="0px 0px 33px 0px"
					>
						Heading
					</Text>
					<Text font="--base" color="--grey" margin="0px 0px 0px 0px">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Box
			box-sizing="border-box"
			padding="24px 24px 24px 24px"
			display="flex"
			flex-direction="column"
			align-items="flex-start"
		/>
	</Theme>;
});