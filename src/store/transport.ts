import { ApplicationError } from "src/error/ApplicationError";

const transport: { instance: ITransport } = {
    instance: {} as ITransport,
};

export function setTransportInstance(instance: ITransport) {
    transport.instance = instance;
}

export function getTransport() {
    if (!transport.instance) {
        throw new ApplicationError("Set transport instace before call 'getTransport', see setTransportInstance");
    }

    return transport.instance;
}
