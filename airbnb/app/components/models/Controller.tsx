'use client';

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import CloseButton from "../CloseButton";

interface ControllerProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    action2?: () => void;
    actionlabel2?: string;
}

const Controller: React.FC<ControllerProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    action2,
    actionlabel2
}) => {
    const [showController, setShowController] = useState(isOpen);
    useEffect(() => {
        setShowController(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }

        setShowController(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondAction = useCallback(() => {
        if (disabled || !action2) {
            return;
        }

    }, [disabled, action2]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div
                className="
                    flex
                    justify-center
                    items-center
                    overflow-x-hidden
                    overflow-y-auto
                    fixed
                    inset-0
                    z-50
                    bg-neutral-800/70
                "
            >
                <div
                    className="
                        relative
                        w-full
                        max-w-lg
                        my-6
                        mx-auto
                        h-auto
                    "
                >
                    {/* CONTENT */}
                    <div
                        className={`
                            translate
                            duration-300
                            ${showController ? 'translate-y-0' : 'translate-y-full'}
                            ${showController ? 'opacity-100' : 'opacity-0'}
                        `}
                    >
                        <div
                            className="
                                translate
                                h-full
                                lg:h-auto
                                md:h-auto
                                border-0
                                rounded-lg
                                shadow-lg
                                relative
                                flex
                                flex-col
                                w-full
                                bg-white
                                outline-none
                                focus:outline-none
                            "
                        >
                            {/* HEADER */}
                            <div
                                className="
                                    flex
                                    items-center
                                    p-6
                                    rounded-t
                                    justify-center
                                    relative
                                    border-b-[1px]
                                "
                            >
                                <button
                                    onClick={handleClose}
                                    className="
                                        p-1
                                        border-0
                                        hover:opacity-70
                                        transition
                                        absolute
                                        left-9
                                    "
                                >
                                    <IoMdClose size={18} />
                                </button>

                                <div
                                    className="
                                        text-lg
                                        font-semibold
                                    "
                                >
                                    {title}
                                </div>
                            </div>
                            {/* BODY */}        
                            <div
                                className="
                                    relative
                                    p-6
                                    flex-auto
                                "
                            >
                                {body}
                            </div>
                            {/* FOOTER */}
                            <div
                                className="
                                    flex
                                    flex-col
                                    gap-2
                                    p-6
                                "
                            >
                                <div
                                    className="
                                        flex
                                        flex-row
                                        items-center
                                        gap-4
                                        w-full
                                    "
                                >
                                    {action2 && actionlabel2 && (
                                        <CloseButton
                                            outline
                                            disabled={disabled}
                                            label={actionlabel2}
                                            onClick={handleSecondAction}
                                        />
                                    )}
                                    <CloseButton
                                        disabled={disabled}
                                        label={actionLabel}
                                        onClick={handleSubmit}
                                    />
                                </div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Controller;