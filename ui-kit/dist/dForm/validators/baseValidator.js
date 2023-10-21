import dayjs from 'dayjs';
export class BaseValidator {
    validate(values, formModel, validationRules, hidden) {
        const errors = {};
        if (!values || !validationRules)
            return errors;
        for (const name in validationRules) {
            if (hidden === null || hidden === void 0 ? void 0 : hidden[name])
                continue;
            const val = values[name] ? values[name] : null;
            const errorMsg = this.validateValue(val, formModel, validationRules[name]);
            if (errorMsg)
                errors[name] = errorMsg;
        }
        return errors;
    }
    validateValue(value, formModel, validationRules) {
        if (!validationRules)
            return '';
        for (const rule of validationRules) {
            if (rule.type === 'string') {
                if (value && typeof value === 'object')
                    return 'Неподходящий тип данных';
                if (!this.validateString(value, rule))
                    return rule.message;
            }
            else if (rule.type === 'file') {
                if (value && typeof value === 'object')
                    return 'Неподходящий тип данных';
                if (!this.validateFile(value, rule))
                    return rule.message;
            }
            else if (rule.type === 'number') {
                if (value && typeof value === 'object')
                    return 'Неподходящий тип данных';
                if (!this.validateNumber(value, rule))
                    return rule.message;
            }
            else if (rule.type === 'date') {
                if (!this.validateDate(value, rule))
                    return rule.message;
            }
            else if (rule.type === 'object') {
                if (typeof value !== 'object')
                    return 'Неподходящий тип данных';
                if (!this.validateRowObject(value, rule))
                    return rule.message;
            }
            else if (rule.type === 'custom') {
                if (typeof rule.callback === 'function')
                    return rule.callback(value, formModel);
            }
        }
        return '';
    }
    validateString(val, rule) {
        const ruleParameter = typeof rule.parameter === 'function' ? rule.parameter(val) : rule.parameter;
        val = val || '';
        if (val) {
            if (rule.rule === 'not-empty')
                return val.length > 0;
            if (rule.rule === 'max-length')
                return val.length <= ruleParameter;
            if (rule.rule === 'min-length')
                return val.length >= ruleParameter;
            if (rule.rule === '=')
                return val.length === ruleParameter;
            if (rule.rule === '!=')
                return val.length !== ruleParameter;
            if (rule.rule === 'is-uuid' || rule.rule === 'is-uuid-or-empty')
                return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(val);
            if (rule.rule === 'is-email' || rule.rule === 'is-email-or-empty')
                return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(val);
        }
        else {
            if (rule.rule === 'not-empty')
                return false;
            if (rule.rule === 'max-length')
                return true;
            if (rule.rule === 'min-length')
                return !ruleParameter;
            if (rule.rule === '=')
                return !ruleParameter;
            if (rule.rule === '!=')
                return !!ruleParameter;
            if (rule.rule === 'is-uuid')
                return false;
            if (rule.rule === 'is-uuid-or-empty')
                return true;
            if (rule.rule === 'is-email')
                return false;
            if (rule.rule === 'is-email-or-empty')
                return true;
        }
        return false;
    }
    validateFile(val, rule) {
        const ruleParameter = typeof rule.parameter === 'function' ? rule.parameter(val) : rule.parameter;
        if (val) {
            if (rule.rule === 'not-empty')
                return val.length > 0;
            if (rule.rule === 'extension') {
                const fileExt = val.substring(val.lastIndexOf('.'));
                return ruleParameter.indexOf(fileExt) >= 0;
            }
        }
        else {
            if (rule.rule === 'not-empty')
                return false;
            if (rule.rule === 'extension')
                return false;
        }
        return false;
    }
    validateNumber(val, rule) {
        if (!val) {
            val = '';
            if (rule.rule !== 'not-empty')
                return true;
        }
        if (rule.rule === 'not-empty')
            return this.isNumeric(val);
        if (rule.rule === 'number-or-empty')
            return !val || this.isNumeric(val);
        const ruleParameter = typeof rule.parameter === 'function' ? rule.parameter(val) : rule.parameter;
        const valNum = +val;
        const paramNum = +ruleParameter;
        if (isNaN(valNum) || isNaN(paramNum))
            return false;
        if (rule.rule === '=')
            return (!val && !ruleParameter) || valNum === paramNum;
        if (rule.rule === '!=')
            return valNum !== paramNum;
        if (rule.rule === '>')
            return valNum > paramNum;
        if (rule.rule === '>=')
            return valNum >= paramNum;
        if (rule.rule === '<')
            return valNum < paramNum;
        if (rule.rule === '<=')
            return valNum <= paramNum;
        return false;
    }
    validateDate(val, rule) {
        if (!val) {
            val = '';
            if (rule.rule !== 'not-empty')
                return true;
        }
        const valDate = dayjs(val, 'DD.MM.YYYY');
        const ruleParameter = typeof rule.parameter === 'function' ? rule.parameter(val) : rule.parameter;
        const parameterDate = dayjs(ruleParameter, 'DD.MM.YYYY');
        if (rule.rule === 'date-or-empty')
            return !val || (valDate.isValid() && val.length <= 10);
        if (rule.rule === 'not-empty')
            return valDate.isValid() && val.length <= 10;
        if (!valDate.isValid() || !parameterDate.isValid() || val.length > 10)
            return false;
        if (rule.rule === '=')
            return valDate === parameterDate;
        if (rule.rule === '!=')
            return valDate !== parameterDate;
        if (rule.rule === '>')
            return valDate > parameterDate;
        if (rule.rule === '>=')
            return valDate >= parameterDate;
        if (rule.rule === '<')
            return valDate < parameterDate;
        if (rule.rule === '<=')
            return valDate <= parameterDate;
        return false;
    }
    validateRowObject(val, rule) {
        var _a;
        if (rule.rule === 'null')
            return val === null || typeof val === 'undefined';
        if (!val)
            return false;
        const ruleParameter = typeof rule.parameter === 'function' ? rule.parameter(val) : rule.parameter;
        if (rule.rule === 'not-empty') {
            if (val instanceof Array) {
                if (val.length > 0)
                    return !!((_a = val[0]) === null || _a === void 0 ? void 0 : _a.id);
                else
                    return false;
            }
            else
                return !!(val === null || val === void 0 ? void 0 : val.id);
        }
        if (rule.rule === '=') {
            if (val instanceof Array) {
                if (val.length > 0)
                    return val[0].id === ruleParameter;
            }
            else
                return val.id === ruleParameter;
        }
        if (rule.rule === '!=') {
            if (val instanceof Array) {
                if (val.length > 0)
                    return val[0].id !== ruleParameter;
            }
            else
                return val.id !== ruleParameter;
        }
        if (rule.rule === 'contains') {
            if (val instanceof Array) {
                return val.filter(function (item) {
                    return item.id === ruleParameter;
                });
            }
            else
                return val.id === ruleParameter;
        }
        if (rule.rule === 'not-contains') {
            if (val instanceof Array) {
                return !val.filter(function (item) {
                    return item.id === ruleParameter;
                });
            }
            else
                return val.id !== ruleParameter;
        }
        return false;
    }
    isNumeric(val) {
        const parsedVal = parseFloat(val);
        return !isNaN(parsedVal) && isFinite(parsedVal);
    }
}
