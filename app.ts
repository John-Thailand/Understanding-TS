let userInput: unknown;

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

const result = generateError('エラーが発生しました', 500);
console.log(result);
