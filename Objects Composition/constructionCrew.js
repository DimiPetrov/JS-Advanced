function addProp(worker) {
    if(worker.dizziness) {
        worker.levelOfHydrated += worker.weight * 0.1 * worker.experience;
        worker.dizziness = false;
    }

    // worker.prop = 'prop';

    return worker;
}

console.log(addProp({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true}));