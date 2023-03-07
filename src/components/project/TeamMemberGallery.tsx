import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    Card,
    CardContent,
    Grid,
    Stack,
} from '@mui/material';

interface Props {
    name: string;
    photo: string;
    alt?: string;
}

interface GalleryProps {
    members: Props[];
}

export const Gallery: FunctionComponent<GalleryProps> = (props) => {
    return (
        <React.Fragment>
            <Grid container spacing={1}>
                {
                    props.members
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(
                        Props => (
                            <Grid
                                item
                                key={Props.name}
                            >
                                <Card>
                                    <CardContent>
                                        <Stack>
                                            {Props.name}
                                            <img
                                                src={Props.photo}
                                                width="150"
                                                alt={Props.alt ? Props.alt : `Photo of ${Props.name}.`}
                                            />
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    )
                }
            </Grid>
        </React.Fragment>
    );
}

export default Gallery;
