// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import {ButtonsRow, ButtonsRowWrapper, IFormButton} from "@src/buttonsRow";
import React from "react";
import {MenuOutlined} from "@ant-design/icons";


export default {
    title: 'Controls/ButtonsRow',
    component: ButtonsRow,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof ButtonsRow>

type Story = StoryObj<typeof ButtonsRow>;

const onClickHandler: IFormButton['onClick'] = (id, button) => alert(button.title + ' has clicked');
export const ButtonsLeft: Story = {
    args: {
        buttons: {
            ok: {title: 'OK', active: true, position: 'left'},
            cancel: {title: 'Cancel', position: 'left'},
        },

    },
}

export const ButtonsCenter: Story = {
    args: {
        buttons: {
            ok: {title: 'OK', active: true, position: 'center'},
            cancel: {title: 'Cancel', position: 'center'},
        },

    },
}
export const ButtonsRight: Story = {
    args: {
        buttons: {
            ok: {title: 'OK', active: true, position: 'right'},
            cancel: {title: 'Cancel', position: 'right'},
        },

    },
}

export const ButtonLoading: Story = {
    args: {
        buttons: {
            ok: {title: 'OK', position: 'left', loading: true},
            cancel: {title: 'Cancel', position: 'left'},
        },

    },
}

export const ButtonTooltips: Story = {
    args: {
        buttons: {
            ok: {title: 'OK', position: 'left', tooltip: ' This is a OK button'},
            cancel: {title: 'Cancel', position: 'left', tooltip: ' This is a Cancel button'},
        },

    },
}

export const ManyButtons: Story = {
    args: {
        buttons: {
            button1: {title: 'Button1', position: 'left', active: true},
            button2: {title: 'Button2', position: 'left', ghost: true},
            button3: {title: 'Button3', position: 'center', danger: true},
            button4: {title: 'Button4', position: 'center', disabled: true},
            button5: {title: 'Button5', position: 'right', loading: true},
            button6: {title: 'Button6', position: 'right'},
        },

    },
}

export const ButtonsError: Story = {
    args: {
        buttons: {
            button1: {title: 'Button1', position: 'left', active: true},
            button4: {title: 'Button4', position: 'left', disabled: true},
            button5: {title: 'Button5', position: 'left', loading: true},
            button6: {title: 'Button6', position: 'left'},
        },
        formType: 'error'
    },
}
export const ButtonsArrowKeys: Story = {
    args: {
        buttons: {
            button1: {title: 'Button1', position: 'left', active: true, onClick: onClickHandler},
            button2: {title: 'Button2', position: 'left', disabled: true, onClick: onClickHandler},
            button3: {title: 'Button3', position: 'left', loading: true, onClick: onClickHandler},
            button4: {title: 'Button4', position: 'left', onClick: onClickHandler},
        },
        arrowsSelection: true,
        makeActivePrimary:false,
    },

    render: (args) => {
        return <ButtonsRowWrapper style={{padding: 30, border: 'solid 1px'}}>
            <p>Set focus here and press left/right arrows</p>
            <ButtonsRow {...args} />
        </ButtonsRowWrapper>
    }
}

export const ButtonsArrowKeysActivePrimary: Story = {
    args: {
        buttons: {
            button1: {title: 'Button1', position: 'left', active: true, onClick: onClickHandler},
            button2: {title: 'Button2', position: 'left', disabled: true, onClick: onClickHandler},
            button3: {title: 'Button3', position: 'left', loading: true, onClick: onClickHandler},
            button4: {title: 'Button4', position: 'left', onClick: onClickHandler},
        },
        arrowsSelection: true,
    },

    render: (args) => {
        return <ButtonsRowWrapper style={{padding: 30, border: 'solid 1px'}}>
            <p>Set focus here and press left/right arrows</p>
            <ButtonsRow {...args} />
        </ButtonsRowWrapper>
    }
}

export const DropdownButton: Story = {
    args: {
        buttons: {
            button1: {
                title: 'Button1', position: 'left', children: {
                    subButton1: {
                        title: 'SubButton1',
                        children: {
                            subButton1_1: {title: 'SubButton1_1', onClick: onClickHandler},
                            subButton1_2: {title: 'SubButton1_2', onClick: onClickHandler}
                        }
                    },
                    subButton2: {title: 'SubButton2', onClick: onClickHandler}
                }
            },
        },
    },
}

export const DropdownButtonCustomIcon: Story = {
    args: {
        buttons: {
            button1: {
                title: '', position: 'left', icon: <MenuOutlined/>,
                children: {
                    subButton1: {
                        title: 'SubButton1',
                        children: {
                            subButton1_1: {title: 'SubButton1_1', onClick: onClickHandler},
                            subButton1_2: {title: 'SubButton1_2', onClick: onClickHandler}
                        }
                    },
                    subButton2: {title: 'SubButton2', onClick: onClickHandler}
                }
            },
        },
    },
}
export const DropdownButtonClickable: Story = {
    args: {
        buttons: {
            button1: {
                title: 'Button1', position: 'left',
                onClick: () => alert('Button1 was pressed'),
                children: {
                    subButton1: {
                        title: 'SubButton1',
                        children: {
                            subButton1_1: {title: 'SubButton1_1', onClick: onClickHandler},
                            subButton1_2: {title: 'SubButton1_2', onClick: onClickHandler}
                        }
                    },
                    subButton2: {title: 'SubButton2', onClick: onClickHandler}
                }
            },
        },
    },
}


