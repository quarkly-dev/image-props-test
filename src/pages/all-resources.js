import React from "react";
import theme from "theme";
import { Theme, Image, Box } from "@quarkly/widgets";
import { Section } from "@quarkly/components";
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
				<Image src="https://uploads.quarkly.io/video/adaptive-image-test-amz-logo1x.webp" />
				<Image src="https://uploads.quarkly.io/video/adaptive-image-test-amz-logo2x.webp" />
				<Image src="https://uploads.quarkly.io/video/adaptive-image-test-amz-logo3x.webp" />
			</Box>
		</Section>
		<Box
			box-sizing="border-box"
			padding="24px 24px 24px 24px"
			display="flex"
			flex-direction="column"
			align-items="flex-start"
		>
			<Image src="https://uploads.quarkly.io/video/adaptive-image-test-fullwidth-1640w.webp" width="100%" />
			<Image src="https://uploads.quarkly.io/video/adaptive-image-test-fullwidth-1280w.webp" width="100%" />
			<Image src="https://uploads.quarkly.io/video/adaptive-image-test-fullwidth-768w.webp" />
			<Image src="https://uploads.quarkly.io/video/adaptive-image-test-fullwidth-320w.webp" />
		</Box>
		<Box
			box-sizing="border-box"
			padding="24px 24px 24px 24px"
			display="flex"
			flex-direction="column"
			align-items="flex-start"
		>
			<Image
				src="https://uploads.quarkly.io/video/adaptive-image-test-layout-1280w.webp"
				height="auto"
				max-height="100%"
				max-width="100%"
				object-fit="contain"
				object-position="100%"
			/>
			<Image
				src="https://uploads.quarkly.io/video/adaptive-image-test-layout-768w.webp"
				height="auto"
				max-height="100%"
				max-width="100%"
				object-fit="contain"
				object-position="100%"
			/>
			<Image
				src="https://uploads.quarkly.io/video/adaptive-image-test-layout-320w.webp"
				height="auto"
				max-height="100%"
				max-width="100%"
				object-fit="contain"
				object-position="100%"
			/>
		</Box>
	</Theme>;
});