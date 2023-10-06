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
            button1: {title: 'Button1', position: 'left', active: true, onClick: onClickHandler},
            button2: {title: 'Button2', position: 'left', ghost: true, onClick: onClickHandler},
            button3: {title: 'Button3', position: 'center', danger: true, onClick: onClickHandler},
            button4: {title: 'Button4', position: 'center', disabled: true, onClick: onClickHandler},
            button5: {title: 'Button5', position: 'right', loading: true, onClick: onClickHandler},
            button6: {title: 'Button6', position: 'right', onClick: onClickHandler},
            link1: {title: 'Link1', position: 'left', type:'link', href:'https://www.ya.ru', target:'_blank'},
            text1: {title: 'Text1', position: 'left', type:'text', onClick: onClickHandler},
        },

    },
}

export const ButtonsError: Story = {
    args: {
        buttons: {
            button1: {title: 'Button1', position: 'left', active: true, onClick: onClickHandler},
            button2: {title: 'Button2', position: 'left', disabled: true, onClick: onClickHandler},
            button3: {title: 'Button3', position: 'left', loading: true, onClick: onClickHandler},
            button4: {title: 'Button4', position: 'left', onClick: onClickHandler},
            link1: {title: 'Link1', position: 'left', type:'link', href:'https://www.ya.ru', target:'_blank'},
            text1: {title: 'Text1', position: 'left', type:'text'},
        },
        formType: 'error'
    },
}
export const ButtonsArrowKeys: Story = {
    args: {
        buttons: {
            button1: {title: 'Button1', position: 'left', active: true, onClick: onClickHandler},
            button2: {title: 'Button2', position: 'left', disabled: true, onClick: onClickHandler},
            divider1: {type:'divider', position: 'left'},
            link1: {title: 'Link1', position: 'left', type:'link', href:'https://www.ya.ru', target:'_blank'},
            text1: {title: 'Text1', position: 'left', type:'text'},
            button3: {title: 'Button3', position: 'left', loading: true, onClick: onClickHandler},
            button4: {title: 'Button4', position: 'left', onClick: onClickHandler},
        },
        arrowsSelection: true,
        makeActivePrimary: false,
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
            divider1: {type:'divider', position: 'left'},
            link1: {title: 'Link1', position: 'left', type:'link', href:'https://www.ya.ru', target:'_blank'},
            text1: {title: 'Text1', position: 'left', type:'text'},
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
                    group1: {title: 'Group1', type:'group'},
                    subButton1: {
                        title: 'SubButton1',
                        children: {
                            subButton1_1: {title: 'SubButton1_1', onClick: onClickHandler},
                            subButton1_2: {title: 'SubButton1_2', onClick: onClickHandler}
                        }
                    },
                    subButton2: {title: 'SubButton2', onClick: onClickHandler},
                    divider1: {type: 'divider'},
                    group2: {title: 'Group2', type:'group'},
                    subButton3: {title: 'SubButton3', onClick: onClickHandler},
                    subButton4: {title: 'SubButton4', onClick: onClickHandler},
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
                    group1: {title: 'Group1', type:'group'},
                    subButton1: {
                        title: 'SubButton1',
                        children: {
                            subButton1_1: {title: 'SubButton1_1', onClick: onClickHandler},
                            subButton1_2: {title: 'SubButton1_2', onClick: onClickHandler}
                        }
                    },
                    subButton2: {title: 'SubButton2', onClick: onClickHandler},
                    divider1: {type: 'divider'},
                    group2: {title: 'Group2', type:'group'},
                    subButton3: {title: 'SubButton3', onClick: onClickHandler},
                    subButton4: {title: 'SubButton4', onClick: onClickHandler}
                }
            },
        },
    },
}

export const ButtonsDivider: Story = {
    args: {
        buttons: {
            button1: {title: 'Button1', position: 'left', active: true},
            button2: {title: 'Button2', position: 'left'},
            divider1: {position: 'left', type: 'divider'},
            button5: {title: 'Button3', position: 'left'},
            link1: {title: 'Link1', position: 'left', type:'link', href:'https://www.ya.ru', target:'_blank'},
            text1: {title: 'Text1', position: 'left', type:'text'},
            divider2: {position: 'left', type: 'divider'},
            button4: {title: 'Button4', position: 'left'},
        },
    },
}
