package com.smartbatchjobui.smartbatchjobui.repositoris;

import com.smartbatchjobui.smartbatchjobui.entity.CreateBatchJobEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import javax.transaction.Transactional;

@Repository
public interface CreateBatchJobRepository extends JpaRepository<CreateBatchJobEntity,Long>{
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM batch_job e WHERE e. batch_job_id=:BatchJobId" ,nativeQuery = true)
    void deleteById(long BatchJobId);
}