import * as React from "react";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { NotificationOption } from "src/const/notification";
import { useDispatch, useSelector } from "src/store/hooks";
import { notificationSlice } from "src/store/reducers/notifications";
import { selectNotification } from "src/store/selectors/notifications";

import style from "./style.pcss";

export function Notification() {
    const dispatch = useDispatch();

    const notification = useSelector(selectNotification);

    const timerId = useRef<number | undefined>();
    const [queue, setQueue] = useState<NotificationItem[]>(() => []);
    const [text, setText] = useState(() => "");

    useEffect(() => {
        if (notification) {
            setQueue(() => [...queue, notification]);
        }
    }, [notification]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (queue.length && !timerId.current) {
            const { type, payload } = queue[0];

            setText(() => payload);
            setQueue(() => queue.splice(1));

            timerId.current = window.setTimeout(() => {
                timerId.current = undefined;
                dispatch(notificationSlice.actions.remove(type));
                setText(() => "");
            }, NotificationOption.duration);
        }
    }, [queue, text]); // eslint-disable-line react-hooks/exhaustive-deps

    if (!text) {
        return null;
    }

    return (
        <div className={cn(style.notification, style.any, style.show)}>
            <p>{text}</p>
        </div>
    );
}
