import { Typography, Box, Stack } from "@pankod/refine-mui";

import { propertyReferralsInfo } from "constants/index";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
  <Box width="100%">
    <Stack direction={"row"} justifyContent="space-between">
      <Typography fontSize={16} fontWeight={500} color="#11142d">
        {title}
      </Typography>
      <Typography fontSize={16} fontWeight={500} color="#11142d">
        {percentage}%
      </Typography>
    </Stack>
    <Box
      mt={2}
      height="8px"
      position={"relative"}
      width="100%"
      borderRadius={1}
      bgcolor="#e4e8ef"
    >
      <Box
        width={`${percentage}%`}
        bgcolor={color}
        height="100%"
        position={"absolute"}
      />
    </Box>
  </Box>
);

const PropertyReferrals = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} color="#111420" fontWeight={600}>
        Property Referrals
      </Typography>
      <Stack my="20px" direction={"column"} gap={4}>
        {propertyReferralsInfo.map((property) => (
          <ProgressBar
            title={property.title}
            percentage={property.percentage}
            color={property.color}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyReferrals;
