// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import {ButtonsRow, ButtonsRowWrapper, IFormButton, IFormButtons} from '@src/buttonsRow';
import React from 'react';
import {MenuOutlined} from '@ant-design/icons';

export default {
    title: 'Controls/ButtonsRow',
    component: ButtonsRow,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof ButtonsRow>;

type Story = StoryObj<typeof ButtonsRow>;

const onClickHandler: IFormButton['onClick'] = (id, button) => alert(button.title + ' has clicked');
export const ButtonsLeft: Story = {
    args: {
        buttons: {
            ok: {title: 'OK', active: true, position: 'left'},
            cancel: {title: 'Cancel', position: 'left'},
        },
    },
};

export const ButtonsCenter: Story = {
    args: {
        buttons: {
            ok: {title: 'OK', active: true, position: 'center'},
            cancel: {title: 'Cancel', position: 'center'},
        },
    },
};
export const ButtonsRight: Story = {
    args: {
        buttons: {
            ok: {title: 'OK', active: true, position: 'right'},
            cancel: {title: 'Cancel', position: 'right'},
        },
    },
};

export const ButtonLoading: Story = {
    args: {
        buttons: {
            ok: {title: 'OK', position: 'left', loading: true},
            cancel: {title: 'Cancel', position: 'left'},
        },
    },
};

export const ButtonTooltips: Story = {
    args: {
        buttons: {
            ok: {title: 'OK', position: 'left', tooltip: ' This is a OK button'},
            cancel: {title: 'Cancel', position: 'left', tooltip: ' This is a Cancel button'},
        },
    },
};

const allTypesButtons: IFormButtons = {
    button1: {title: 'Button1', position: 'left', active: true, onClick: onClickHandler},
    button2: {title: 'Button2', position: 'left', active: true, colorType:'warning', onClick: onClickHandler},
    button3: {title: 'Button3', position: 'left', active: true, colorType:'success', onClick: onClickHandler},
    button4: {title: 'Button4', position: 'left', active: true, colorType:'danger', onClick: onClickHandler},
    button5: {title: 'Button5', position: 'left', ghost: true, onClick: onClickHandler},
    divider2: {position: 'left', type: 'divider'},
    link1: {title: 'Link1', position: 'left', type: 'link', href: 'https://www.ya.ru', target: '_blank'},
    text1: {title: 'Text1', position: 'left', type: 'text', onClick: onClickHandler},
    button6: {title: 'Button6', position: 'left', colorType:'warning', onClick: onClickHandler},
    button7: {title: 'Button7', position: 'left', colorType:'success', onClick: onClickHandler},
    button8: {title: 'Button8', position: 'left', colorType:'danger', onClick: onClickHandler},
    button9: {title: 'Button9', position: 'center', dashed: true, onClick: onClickHandler},
    button10: {title: 'Button10', position: 'center', disabled: true, onClick: onClickHandler},
    button11: {title: 'Button11', position: 'right', loading: true, onClick: onClickHandler},
    button12: {title: 'Button12', position: 'right', onClick: onClickHandler},
    custom: {
        title: (
            <div style={{border:"1px solid green", padding:4}}>
                <b>Custom</b> Element
            </div>
        ),
        type: 'element',
    },
};
const dropDownItems: IFormButtons = {
    group1: {title: 'Group1', type: 'group'},
    subButton1: {
        title: 'Item1',
        children: {
            subButton1_1: {title: 'SubItem 1', onClick: onClickHandler},
            subButton1_2: {title: 'SubItem 2', onClick: onClickHandler},
        },
    },
    subButton2: {
        title: 'Item2',
        onClick: onClickHandler,
        children: {
            subButton2_1: {title: 'SubItem 3', onClick: onClickHandler},
            subButton2_2: {title: 'SubItem 4', onClick: onClickHandler},
        },
    },
    divider1: {type: 'divider'},
    group2: {title: 'Group2', type: 'group'},
    subButton3: {title: 'Link', type: 'link', style:{textDecoration:'underline'}, href: 'https://ya.ru', target: '_blank'},
    subButton4: {title: <b style={{color: 'red'}}>Item4</b>, onClick: onClickHandler},
};

export const ManyButtons: Story = {
    args: {
        buttons: allTypesButtons,
    },
};

export const ButtonsError: Story = {
    args: {
        buttons: allTypesButtons,
        colorType: 'danger',
    },
};
export const ButtonsArrowKeys: Story = {
    args: {
        buttons: allTypesButtons,
        arrowsSelection: true,
        makeActivePrimary: false,
    },

    render: (args) => {
        return (
            <ButtonsRowWrapper style={{padding: 30, border: 'solid 1px'}}>
                <p>Set focus here and press left/right arrows</p>
                <ButtonsRow {...args} />
            </ButtonsRowWrapper>
        );
    },
};

export const ButtonsArrowKeysActivePrimary: Story = {
    args: {
        buttons: allTypesButtons,
        arrowsSelection: true,
    },

    render: (args) => {
        return (
            <ButtonsRowWrapper style={{padding: 30, border: 'solid 1px'}}>
                <p>Set focus here and press left/right arrows</p>
                <ButtonsRow {...args} />
            </ButtonsRowWrapper>
        );
    },
};

export const DropdownButton: Story = {
    args: {
        buttons: {
            button1: {
                title: 'Button1',
                position: 'left',
                children: dropDownItems,
            },
        },
    },
};

export const DropdownButtonIconOnly: Story = {
    args: {
        buttons: {
            button1: {
                title: '',
                position: 'left',
                expandIcon: <MenuOutlined />,
                children: dropDownItems,
            },
        },
    },
};
export const DropdownButtonClickable: Story = {
    args: {
        buttons: {
            button1: {
                title: 'Button1',
                position: 'left',
                onClick: onClickHandler,
                children: dropDownItems,
            },
        },
    },
};

export const DropdownLink: Story = {
    args: {
        buttons: {
            link1: {
                title: 'Link1',
                position: 'left',
                type: 'link',
                children: dropDownItems,
            },
        },
    },
};
