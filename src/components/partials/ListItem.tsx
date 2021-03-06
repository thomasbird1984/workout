import React from "react";
import "./ListItem.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const COMPONENT_NAME = "ListItem";

interface ListItemProps {
    description: string;
    onRemove?(): void;
    url?: string;
}

const ListItem = ({ description, onRemove, url }: ListItemProps) => (
    <li>
        {url ? (
            <Link to={url}>
                {description}
            </Link>
        ): (
            description
        )}

        {onRemove ? (
            <span
                className={`${COMPONENT_NAME}--remove`}
                onClick={() => onRemove && onRemove()}
            >
                <FontAwesomeIcon icon={"times"} />
            </span>
        ): undefined}
    </li>
);

export { ListItem };
