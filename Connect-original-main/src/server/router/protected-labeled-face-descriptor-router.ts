import { createProtectedRouter } from './protected-router';

export const protectedLabeledFaceDescriptorRouter = createProtectedRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      const labeledFaceDescriptors =
        await ctx.prisma.labeledFaceDescriptor.findMany();

      return labeledFaceDescriptors;
    },
  })
  .query('loadModels', {
    async resolve() {
      return true;
    },
  });
