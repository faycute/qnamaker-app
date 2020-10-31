// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const {
    QnAMakerDialog
} = require('botbuilder-ai');

const {
    ActivityFactory
} = require('botbuilder-core');

// Default parameters
const DefaultThreshold = 0.3;
const DefaultTopN = 3;
const DefaultNoAnswer = '回答は見つかりませんでした。';

// Card parameters
const DefaultCardTitle = 'どちらの質問でしょうか？';
const DefaultCardNoMatchText = '近いものはない';
const DefaultCardNoMatchResponse = 'フィードバックありがとうございました。';

/// QnA Maker dialog.
const QNAMAKER_BASE_DIALOG = 'qnamaker-base-dailog';

class QnAMakerBaseDialog extends QnAMakerDialog {
    /**
     * Core logic of QnA Maker dialog.
     * @param {QnAMaker} qnaService A QnAMaker service object.
     */
    constructor(knowledgebaseId, authkey, host) {
        var noAnswer = ActivityFactory.fromObject(DefaultNoAnswer);
        var filters = [];
        super(knowledgebaseId, authkey, host, noAnswer, DefaultThreshold, DefaultCardTitle, DefaultCardNoMatchText,
            DefaultTopN, ActivityFactory.cardNoMatchResponse, filters, QNAMAKER_BASE_DIALOG);
        this.id = QNAMAKER_BASE_DIALOG;
    }
}

module.exports.QnAMakerBaseDialog = QnAMakerBaseDialog;
module.exports.QNAMAKER_BASE_DIALOG = QNAMAKER_BASE_DIALOG;
module.exports.DefaultThreshold = DefaultThreshold;
module.exports.DefaultTopN = DefaultTopN;
module.exports.DefaultNoAnswer = DefaultNoAnswer;
module.exports.DefaultCardTitle = DefaultCardTitle;
module.exports.DefaultCardNoMatchText = DefaultCardNoMatchText;
module.exports.DefaultCardNoMatchResponse = DefaultCardNoMatchResponse;
