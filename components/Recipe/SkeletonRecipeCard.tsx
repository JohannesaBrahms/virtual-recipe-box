import { Card, CardActions, CardContent, CardHeader, Skeleton } from '@mui/material';

export default function SkeletonRecipeCard() {
  return (
    <Card>
      <CardHeader
        avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
        title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
        subheader={
          <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
        }
      />
      <Skeleton sx={{ height: 250 }} animation="wave" variant="rectangular" />
      <CardContent>
        <>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </>
      </CardContent>
      <CardActions>
        <Skeleton animation="wave" height={20} width="25%" style={{ marginBottom: 6 }} />
      </CardActions>
    </Card>
  );
}
