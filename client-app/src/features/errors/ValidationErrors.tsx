import React from "react";
import { Message } from "semantic-ui-react";

interface Props {
    errors: string[] | null;
}

export default function ValidationErrors({ errors }: Props) {
    return <Message error>
        {errors && (
            <Message.List>
                {errors.map((errItem: any, i) => (
                    <Message.Item key={i}>{errItem}</Message.Item>
                ))}
            </Message.List>
        )}
    </Message>
}